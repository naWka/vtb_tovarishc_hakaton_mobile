# Мобильное приложение Товарищ Хакатон

Приложение разработано на [react-native](https://reactnative.dev) с помощью инструмента [expo](https://expo.dev).

## Для быстрой установки приложения с сервера expo
Мы уже собрали приложение и выложили его на expo.dev
Для этого надо на телефон установить приложение **Expo Go**

Ссылка на приложение Expo [для iOS](https://apps.apple.com/app/apple-store/id982107779) или [Для андроид](https://play.google.com/store/apps/details?id=host.exp.exponent)

Далее, на компьютере заходите по ссылке:
https://expo.dev/@geosavin/vtbtovarishchakatonmobile

Для iOS
На телефоне заходите через стандартоне приложение "камера", сканируете qr код и вас перебрасывает в приложение expo

Для Android
На телефоне сначала заходим в приложение expo. Логинимся внутри приложения (логин/пароль можно получить у меня в телеграм @geosavin)
И потом внутри приложения экспо есть кнопка “проканировать qr-код” и просканировать qr-код.




## Для сборки приложения локально
1. Установить node-js, npm, и желательно yarn


2. Далее, установить программу expo:

```bash
yarn global add expo-cli
```
(или `npm install -g expo-cli`)

3. запустить сервер для связи мобильного приложения с исходниками
```bash
yarn start # you can also use: expo start
```
(или `npm start # you can also use: expo start`)

Запустится сервер для связи мобильного приложения с исходниками и появится QR-код


4. Далее на телефоне установить expo [Для iOS](https://apps.apple.com/app/apple-store/id982107779) или [Для андроид](https://play.google.com/store/apps/details?id=host.exp.exponent)

5. Запустить приложение на телефоне

Для iOS на телефоне заходите через стандартоне приложение "камера", сканируете qr код и вас перебрасывает в приложение expo

Для android внутри приложения Expo просканировать QR-код и приложение запустится.


[Ссылка на документацию от Expo для запуска на iOS or Android](https://docs.expo.dev/get-started/installation/#2-expo-go-app-for-ios-and)
