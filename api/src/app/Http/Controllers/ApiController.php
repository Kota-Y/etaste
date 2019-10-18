<?php

namespace App\Http\Controllers;
use Illuminate\Http\JsonResponse;

class ApiController extends Controller
{
    public function index()
    {
        return new JsonResponse('You are authorized user');
    }
}