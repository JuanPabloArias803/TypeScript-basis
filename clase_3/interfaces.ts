interface User {
  firstName: string;
  lastName: string;
  age: number;
  skills: string[];
  greetting(): void;
}

const user1: User = {
  firstName: 'Juan',
  lastName: 'Arias',
  age: 22,
  skills: ['JavaScript', 'CSS', 'HTML'],
  greetting() {
    console.log('Hello world');
  },
};

//consumir Jsonplaceholder
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fetchApi = async () => {
  const resp: Response = await fetch(
    'https://jsonplaceholder.typicode.com/posts'
  );
  const data: Post[] = await resp.json();
  console.log(data);
};

fetchApi();
