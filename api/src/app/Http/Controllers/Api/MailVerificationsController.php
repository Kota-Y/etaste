<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Models\MailVerification;
use App\Models\User;
use App\Mail\MailVerification as MailVerificationMail;
use App\Mail\MailVerificationConfimComplete as MailVerificationConfimCompleteMail;
use App\Http\Controllers\Controller;

define('ACTIVATE_SALT', '14FU50JFRVFF31V');

class MailVerificationsController extends Controller
{
    public function store($mail)
    {
        $mail_verification = new MailVerification();

        $mail_verification->mail_authentication = self::createActivationCode($mail);
        $mail_verification->mail = $mail;

        $mail_verification->save();

        self::sendMailVerification($mail_verification);
    }

    public function verify($active_code)
    {
        $mail_verification = self::getMailInfoFromActiveCode($active_code);

        $mail = $mail_verification[0]->mail;

        $user = new User();

        $user->isVerified($mail);

        self::destroy($mail_verification[0]->id);

        self::sendMailVerificationComplete($mail);
    }

    public function destroy($id)
    {
        $mail_verification = MailVerification::find($id);
        $mail_verification->delete();
    }

    private function createActivationCode($mail)
    {
        return hash_hmac('sha256', $mail, ACTIVATE_SALT);
    }

    private function sendMailVerification($mail_verification)
    {
        Mail::to($mail_verification->mail)
            ->send(new MailVerificationMail($mail_verification->mail_authentication));
    }

    private function sendMailVerificationComplete($mail)
    {
        Mail::to($mail)
            ->send(new MailVerificationConfimCompleteMail());
    }

    private function getMailInfoFromActiveCode($active_code)
    {
        return MailVerification::where('mail_authentication', $active_code)->get(); 
    }
}
