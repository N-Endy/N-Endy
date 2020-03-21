function javascriptTask() {
    let name = 'Okafor Nelson';
    let courses = ['HTML', 'CSS', 'Javascript'];

    console.log(name, courses);
    

    for (let i=1; i<=200; i++) {
        if (courses.length%2==0 && i%2==0) {
            console.log(i);
        } else if (courses.length%2==1 && i%2==1) {
            console.log(i)
        }
    }
}

javascriptTask();