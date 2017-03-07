##Installation

### Laravel Setup
```sh
$ composer update
```
Create ```.env``` file for you environment variables. (Look at ```.env.example for what you will need```)

Generate new app key: 
```sh 
$ php artisan key:generate
```

Migrate database for users and posts tables
```sh
$ php artisan migrate 
```

Compile SASS
```sh
$ gulp
```

### Install Front-End Requirements
```sh
$ cd client-app
$ npm install
```

### Run Back-End

```sh
$ php artisan serve
```


### Run Front-End

```sh
$ cd client-app
$ npm start
```

 
