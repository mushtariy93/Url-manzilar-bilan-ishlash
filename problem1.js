async function modifyUserData() {
  try {
   const userResponse = await fetch(
     `https://jsonplaceholder.typicode.com/users/1 `
   );
    if(!userResponse.ok){
        throw new Error(`Network response was not ok for user data`);
    }
   const  user = await userResponse.json();
    // console.log(user);

   const postResponse = await fetch(
     `https://jsonplaceholder.typicode.com/posts?userId=1 `
   );
    if(!postResponse.ok){
        throw new Error(`Network response was not ok for`);
    }
   const  post = await postResponse.json();
    // console.log("******************");
    // console.log(post);
    user.name = "New Name";
    user.company.name = "New Copmany Name";

    for (let i = 0; i < post.length; i++) {
      post[i].title = `New Title: ${post[i].title}`;
    };
    console.log(`Modified User:`, user);
    console.log(`Modified Posts:`, post);
  } catch (error) {
    console.log(`Error`, error);
  }
}
modifyUserData();
