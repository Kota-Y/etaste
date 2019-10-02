<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Store;
use App\Http\Controllers\Controller;

class StoresController extends Controller
{
    public function index()
    {
        $md = new Store();
        $datas = $md->getData();
        return response()->json(
            $datas,
            200,
            [],
            JSON_UNESCAPED_UNICODE
        );
    }

    public function show($id)
    {
        $md = new Store();
        $data = $md->getData($id);
        return response()->json(
            $data,
            200,
            [],
            JSON_UNESCAPED_UNICODE
        );
    }

    public function destroy($id)
    {
        $store = Store::find($id);
        $store->delete();
        return response([], 200);        
    }
}
