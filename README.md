## About laravel9vue3Auth
It is a Laravel 9 Vue 3 Vite based demo project reflecting the way of authentication using laravel sanctum and use Vue 3 as frontend framework. Build with love and open source for developers. 

1. Bootstrap 5.2
2. laravel 9
3. Vue 3
4. Vite 


## Getting Started Step by Step
1. In your root folder, clone the project file using git clone https://github.com/rafi021/laravel9vue3Auth.git
2. Open terminal (bash/cmd). Then go to project folder using command

```sh
cd laravel9vue3Auth
```

3. Then install required files and libraries using 

```sh
composer install
```

4. Then create a .env file and generate key for this project using command 

```sh
cp .env.example .env

php artisan key:generate
```

5. Then compile all CSS & JS files together using this command

```sh
npm install && npm run dev
```
* if npm shows error then try to use --force flag with npm install like this*

```sh
npm install --force
```
or

```sh
yarn install && yarn run dev
```
6. Create a database in MYSQL and connect it with your project via updating .env file.
7. After connecting the db with project, then run command 

```sh
php artisan migrate
```

After completing the migration. Now you can register new user and login using that user. It will redirect you into the dashboard. 

If you found any problem, please feel free to reach me. 
