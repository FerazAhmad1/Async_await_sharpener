// const posts = [
//   { title: "1th post", body: "this is post number 1th", createdAt: new Date() },
//   { title: "2th post", body: "this is post number 2th", createdAt: new Date() },
// ];

// function getPost() {
//   setTimeout(() => {
//     let outPut = "";
//     posts.forEach((post, index) => {
//       outPut += `<li class = "addedElement">${post.title}  ${Math.floor(
//         (new Date().getTime() - post.createdAt.getTime()) / 1000
//       )} second ago</li>`;
//     });
//     document.body.innerHTML = outPut;
//   }, 1000);
// }

// function createPost(post) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.push({ ...post, createdAt: new Date() });

//       const error = false;
//       if (!error) {
//         resolve();
//       } else {
//         reject("Error something went wrong");
//       }
//     }, 2000);
//   });
// }

// createPost({
//   title: "third post",
//   body: "this is post number three",
// }).then(getPost);

// function deletePost(post) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const addedElement = document.querySelector(".addedElement");
//       const error = posts.length == 0;

//       if (!error) {
//         resolve();
//       } else {
//         reject("Error something went wrong");
//       }
//       addedElement.remove();
//       posts.pop();
//     }, 1000);
//   });
// }

// function updateUserActivity() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.lastModified;
//     });
//   });
// }

// createPost({ title: "4th post", body: "this is post number 4th" })
//   .then(getPost)
//   .then(deletePost)
//   .then(deletePost)
//   .then(deletePost)
//   .then(deletePost)
//   .then(deletePost)
//   .catch((err) => console.log(err));

///////////////////////// PROMISES   ////////////////////////////////////////////////////////

console.log("person1:shows ticket");
console.log("person2:shows ticket");

const promiseWifeBringingTickets = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("ticket");
  }, 3000);
});

const getPopCorn = promiseWifeBringingTickets.then((t) => {
  console.log(`wife:here is ticket`);
  console.log(`husband:we should go in`);
  console.log(`wife:no i am hungry`);
  return new Promise((resolve, reject) => {
    resolve(`${t} popcorn`);
  });
});

const goGetButter = getPopCorn.then((t) => {
  console.log(`husband:here is popcorn`);
  console.log(`husband:we should go in`);
  console.log(`wife:no,i need butter on my popcorn`);
  return new Promise((resolve, reject) => {
    resolve(`${t} butter`);
  });
});

const getColdDrink = goGetButter.then((t) => {
  console.log(`husband:here is butter`);
  console.log(`husband:we should go in`);
  console.log(`wife:no,i need thumsup`);
  return new Promise((resolve, reject) => {
    resolve(`${t} thumsUp`);
  });
});
getColdDrink.then((t) => console.log(t));
console.log("person4:shows ticket");
console.log("person5:shows ticket");
