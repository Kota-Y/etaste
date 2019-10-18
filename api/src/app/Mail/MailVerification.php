<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

define('MAIL_VERIFICATION_SUBJECT', '[ETASTE]メールアドレス認証');

class MailVerification extends Mailable
{
    use Queueable, SerializesModels;

    protected  $mail_verification;

    public function __construct($_mail_verification)
    {
        $this->mail_verification = $_mail_verification;
    }

    public function build()
    {
        $auth_url = config('const.BASE_URL') . '/verify/' . $this->mail_verification;

        return $this->from(config('mail.from.address'))
                    ->subject(MAIL_VERIFICATION_SUBJECT)
                    ->view('mails.verification', compact('auth_url'));
    }
}
