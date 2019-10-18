@extends('layouts.app')
 
@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">メールアドレス認証はお済みですか？</div>
 
                <div class="card-body"> 
                    このページを閲覧するには、Eメールによる認証が必要です。
                    もし認証用のメールを受け取っていない場合、<a href='{{$auth_url}}'>こちらのリンク</a>をクリックして、認証メールを受け取ってください。
                </div>
            </div>
        </div>
    </div>
</div>
@endsection