const text = document.querySelector('#text');
const count = document.querySelector('#count');


text.addEventListener('keyup', () => {
    // キーが入力された時の処理
    count.textContent = text.value.length;

    if(text.value.length > 100){
        // alertクラスを加える
        count.classList.add('alert');
    }else{
        // alertクラスを外す
        count.classList.remove('alert')
    }
});