//WORD QUIZ
//ANALIZ
//bir tane dogrusu bulunan coktan secmeli bir quiz hazirlanacak.
//her soruda cevap sonrasi puanlar toplanip bir sonraki soruya gececek
//toplam puan verilecek.
//==============
//once component icinde bir wordquiz sayfasi olusturduk.
//soru ve cevap bilgisini olusturduk.
//app.js de fonksiyonla wordquizde belirlenen sorular soruldu ve alinan cevaplar puanlamayi olusturdu.

import './App.css';
import Quiz from './components/wordquiz';

function App() {
  return (
    <div className="App">
     
          <Quiz/>
       
    </div>
  );
}
export default App;

