<!DOCTYPE html>
<html lang="ru">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap" rel="stylesheet" />
	<link rel="stylesheet" href="/assets/main.css">
	<script src="/assets/tailwind.js"></script>
	<link rel="shortcut icon" href="public/images/favicon.svg" type="image/x-icon">

	<title>Регистрация</title>
</head>

<body>
	<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
		<div class="sm:mx-auto sm:w-full sm:max-w-sm">
			<a href="/"><img class="mx-auto h-10 w-auto" src="public/images/LogoForest.svg" alt="Вайбул Эко"></a>
			<h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Создайте ваш аккаунт</h2>
		</div>

		<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
			<form class="space-y-6" action="/sign-up" method="POST">
        <div>
					<label for="surname" class="block text-sm font-medium leading-6 text-gray-900">Фамилия <span class="text-red-500">*</span></label>
					<div class="mt-2">
						<input id="surname" name="surname" type="text" required class="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6">
					</div>
				</div>
				<div>
					<label for="name" class="block text-sm font-medium leading-6 text-gray-900">Имя <span class="text-red-500">*</span></label>
					<div class="mt-2">
						<input id="name" name="name" type="text" required class="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6">
					</div>
				</div>
				<div>
					<label for="patronymic" class="block text-sm font-medium leading-6 text-gray-900">Отчество</label>
					<div class="mt-2">
						<input id="patronymic" name="patronymic" type="text" class="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6">
					</div>
				</div>
				<div>
					<label for="email" class="block text-sm font-medium leading-6 text-gray-900">Почта <span class="text-red-500">*</span></label>
					<div class="mt-2">
						<input id="email" name="email" type="email" autocomplete="email" required class="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6">
					</div>
				</div>
				<div>
					<label for="phone" class="block text-sm font-medium leading-6 text-gray-900">Телефон</label>
					<div class="mt-2">
						<input id="phone" name="phone" type="tel" autocomplete="tel" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6">
					</div>
				</div>
				<div>
				<label for="role" class="block text-sm font-medium leading-6 text-gray-900">Выберите роль <span class="text-red-500">*</span></label>
				<div class="mt-2">
						<select id="role" name="role" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6">
							<option value="" disabled selected>Выберите роль</option>
							<option value="3">Организатор</option>
							<option value="4">Активист</option>
						</select>
					</div>
				</div>
				<div>
					<label for="password" class="block text-sm font-medium leading-6 text-gray-900">Пароль <span class="text-red-500">*</span></label>
					<div class="mt-2">
						<input id="password" name="password" type="password" autocomplete="new-password" required class="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6">
					</div>
				</div>
				<div>
					<label for="confirm_password" class="block text-sm font-medium leading-6 text-gray-900">Подтвердите пароль <span class="text-red-500">*</span></label>
					<div class="mt-2">
						<input id="confirm_password" name="confirm_password" type="password" autocomplete="new-password" required class="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6">
					</div>
				</div>

				<div>
					<button type="submit" class="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Зарегистрироваться</button>
				</div>
			</form>

			<p class="mt-10 text-center text-sm text-gray-500">
				Уже есть аккаунт?
				<a href="/auth" class="font-semibold leading-6 text-green-600 hover:text-green-700">Войти</a>
			</p>
		</div>
	</div>
</body>
<script src="/assets/imask.js"></script>

<script>
    var element = document.getElementById('phone');
    var maskOptions = {
        mask: '+7 (000) 000-00-00',
        lazy: false
    }
    var mask = new IMask(element, maskOptions);
</script>

</html>
