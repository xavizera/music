<?php

namespace App\Http\Controllers;

use App\Models\Song;
use Inertia\Inertia;
use Inertia\Response;

class SongController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('song/index', [
            'songs' => Song::all(),
        ]);
    }
}
