import books from '@/app/api/db';

export async function PUT(
    request: Request,
    context: {params: {id: string}},
) {
    const id = +context.params.id;
    const book = await request.json();

    const index = books.findIndex((b) => b.id == id);
    books[index] = book;
    return Response.json(books);
}

export async function DELETE(
    request: Request, 
    context: {params: {id: string}},
) {
    const id = +context.params.id;
    const index = books.findIndex((b) => b.id == id);
    books.splice(index, 1);
    return Response.json(books);
}

/*

PUT

fetch('/api/books/2', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ id: 2, name: 'Deep Work (Updated Edition)' })
})
  .then(res => res.json())
  .then(data => console.log(data));


DELETE

fetch('/api/books/3', {
  method: 'DELETE'
})
  .then(res => res.json())
  .then(data => console.log(data));


*/