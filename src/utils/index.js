export const debounce = (func, timeOut = 300) => {
    let timer = ''
    return function(){
        const ctx = this;
        const args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(ctx,args), timeOut);
    }
}