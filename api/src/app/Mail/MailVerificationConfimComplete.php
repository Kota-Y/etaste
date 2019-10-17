<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

define('MAIL_VERIFICATION_CONFIRM_COMPLETE_SUBJECT', '[ETASTE]メールアドレス認証完了');

class MailVerificationConfimComplete extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct()
    {
       //
    }

    public function build()
    {

        return $this->from(config('mail.from.address'))
                    ->subject(MAIL_VERIFICATION_CONFIRM_COMPLETE_SUBJECT)
                    ->view('mails.verificationConfirmConplete');
    }
}
