// async - await (try-catch)

function upload() {
    console.log("Uploading");
    return new Promise((resolve,reject)=>{
        let isupload = true
        setTimeout(() => {
            if (isupload) {
                resolve("Upload Done")
            } else {
                reject("Upload Failed")
            }
        }, 1000);
    })
}

function publish() {
    console.log("Publishing");
    return new Promise((resolve,reject)=>{
        let ispublish = true
        setTimeout(() => {
            if (ispublish) {
                resolve("Publish Done")
            } else {
                reject("Publish Failed")
            }
        }, 1500);
    })
}

function notify() {
    console.log("Notification Sent");
}

async function func() {
    try {
        const isupload = await upload()
        console.log(isupload);
        const ispublish = await publish()
        console.log(ispublish);
        notify()
    } catch (error) {
        console.log(error);
    }
}

func()