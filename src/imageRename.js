function run(){
    let num = 23;

    for (let i = 1; i <= 13; i++) {
        
        console.log(`import test${num++} from '../assets/testimonials/test${num-1}.jpg'`);  
    }
}

run();