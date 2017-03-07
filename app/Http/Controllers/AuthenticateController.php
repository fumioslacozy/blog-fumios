<?php

namespace App\Http\Controllers;

use App\User as User;
use Illuminate\Http\Request;

use App\Http\Requests;
use Mockery\CountValidator\Exception;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Auth;

class AuthenticateController extends Controller
{
  public function index(){
    return view('api.auth');
  }

  public function register(Request $request){

   $credentials = $request->only('email', 'password');

   $validator = \Validator::make($credentials, [
    'email' => 'required|email|unique:users',
    'password' => 'required']);
   if ($validator->fails()) {
    return response()->json(['error' => 'This user such a already exist'], 422);
  }

  $user = User::create($credentials);
  $token = JWTAuth::fromUser($user);

  $user->update([
    'jwt_token' => $token
  ]);

  return response()->json(compact('token'), 200);
}

public function authenticate(Request $request)
{

  // grab credentials from the request
  $credentials = $request->only('email', 'password');
  $user = User::where('email', $credentials['email'])->first();

  try {
      Auth::attempt(['email'=> $credentials['email'], 'password' => $credentials['password']]);
      
  } catch (Exception $e) {
    return response()->json(['error' => 'could not create session for user'], 500);
  }

  try {
    // attempt to verify the credentials and create a token for the user
    if (! $token = JWTAuth::attempt($credentials)) {
        return response()->json(compact('token'));
    }
  } catch (JWTException $e) {
            // something went wrong whilst attempting to encode the token
    return response()->json(['error' => 'could_not_create_token'], 500);
  }
 

  

  try {
    $user->update([
      'jwt_token' => $token
    ]);
  } catch(Exception $e) {
    return response()->json(['error' => 'could not update the user'], 500);
  }     


  

  // all good so return the token
  return response()->json(compact('token'));
}


protected function create(array $data)
{
  return User::create([
    'email' => $data['email'],
    'password' => bcrypt($data['password']),
  ]);
}

}
