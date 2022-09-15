const posts = [
  { title: "1th post", body: "this is post number 1th", createdAt: new Date() },
  { title: "2th post", body: "this is post number 2th", createdAt: new Date() },
];

function getPost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;

      let outPut = "";
      posts.forEach((post, index) => {
        outPut += `<li class = "addedElement">${post.title}  ${Math.floor(
          (new Date().getTime() - post.createdAt.getTime()) / 1000
        )} second ago</li>`;
      });
      document.body.innerHTML = outPut;
      if (!error) {
        resolve();
      } else {
        reject("something went wrong");
      }
    }, 1000);
  });
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push({ ...post, createdAt: new Date() });

      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error something went wrong");
      }
    }, 2000);
  });
}

createPost({
  title: "third post",
  body: "this is post number three",
}).then(getPost);

function deletePost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const addedElement = document.querySelector(".addedElement");

      addedElement.remove();
      posts.pop();
      const error = posts.length == 0;

      if (!error) {
        resolve();
      } else {
        reject("array is empty");
      }
    }, 1000);
  });
}

function updateUserActivity() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.lastModified;
    });
  });
}

createPost({ title: "4th post", body: "this is post number 4th" }).then(() => {
  getPost().then(() => {
    deletePost().then(() => {
      deletePost().then(() => {
        deletePost().then(() => {
          deletePost()
            .then(() => {
              deletePost();
            })
            .catch((err) => {
              console.log(err);
            });
        });
      });
    });
  });
});

/////////////////////asyncawait//////////////////////////

console.log("person1:shows ticket");
console.log("person2:shows ticket");

const preMovie = async () => {
  const promiseWifeBringingTickets = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ticket");
    }, 3000);
  });

  let gettea = new Promise((resolve, reject) => {
    resolve("tea");
  });
  let getsamose = new Promise((resolve, reject) => {
    resolve("samose");
  });
  let gethariChatni = new Promise((resolve, reject) => {
    resolve("Harihatni");
  });
  let [tea, hariChatni, samose] = await Promise.all([
    gettea,
    gethariChatni,
    getsamose,
  ]);

  console.log(`${tea} ${hariChatni} ${samose}`);

  let ticket = await promiseWifeBringingTickets;
  console.log(`wife:here is ticket`);
  console.log(`husband:we should go in`);
  console.log(`wife:no i am hungry`);

  const getPopCorn = new Promise((resolve, reject) => {
    resolve(`popcorn`);
  });
  let popcorn = await getPopCorn;

  console.log(`husband:here is popcorn`);
  console.log(`husband:we should go in`);
  console.log(`wife:no,i need butter on my popcorn`);

  const goGetButter = new Promise((resolve, reject) => {
    resolve(`butter`);
  });
  let butter = await goGetButter;

  console.log(`husband:here is butter`);
  console.log(`husband:we should go in`);
  console.log(`wife:no,i need thumsup`);
  const getColdDrink = new Promise((resolve, reject) => {
    resolve("ThumsUp");
  });
  let thumsUp = await getColdDrink;
  console.log(`husband:here is ThumsUp`);
  console.log(`husband:we should go in`);

  return ticket;
};
preMovie().then((m) => console.log(`person3:shows ${m}`));

console.log("person4:shows ticket");
console.log("person5:shows ticket");

/////////////////////////////////////////////End////////////////////////////////
