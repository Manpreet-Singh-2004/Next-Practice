import books from '@/app/api/db';

export async function GET(){
    return Response.json(books);
}

export async function POST(request: Request) {
    const book = await request.json();
    books.push(book);

    return Response.json(books);
}


/*
POST

fetch("/api/books", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ id: 4, name: "Rich Dad Poor Dad" })
})
  .then(res => res.json())
  .then(data => console.log(data));

*/