<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class HomeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }


    public function index()
    {
        $user = auth()->user()->id;

        $todo = Todo::where('user_id', $user)->get();

        return Inertia::render("Home/Index", ['message' => $todo]);
    }

    public function postTodo(Request $req)
    {
        $user = auth()->user()->id;

        $todo = new Todo();
        $todo->todo = $req->todo;
        $todo->user_id = $user;
        $todo->save();

        return Redirect::route('home');
    }

    function getTodo($id)
    {
        $todo = Todo::find($id);
        return Inertia::render('Home/Todo', ['todo' => $todo]);
    }

    function editTodo(Request $req, $id)
    {
        $todo = Todo::find($id);
        $todo->todo = $req->todo;
        $todo->save();
        return Redirect::back();
    }

    function deleteTodo($id)
    {
        Todo::destroy($id);

        $user = auth()->user()->id;
        $todo = Todo::where('user_id', $user)->get();

        return Inertia::render("Home/Index", ['message' => $todo]);
    }
}
