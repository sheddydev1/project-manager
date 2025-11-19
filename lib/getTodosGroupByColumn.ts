import { databases } from "@/appwrite";

export const getTodosGroupByColumn = async () => {
    const data = await databases.listDocuments(
       { databaseId: process.env.NEXT_PUBLIC_DATABASE_ID!,
        collectionId: process.env.NEXT_PUBLIC_TOD0S_COLLECTION_ID!}
    );

    // console.log(data);
    const todos = data.documents

    const columns = todos.reduce((acc, todo) => {
        if(!acc.get(todo.status)){
            acc.set(todo.status, {
                id: todo.status,
                todos: [],
            }) 
        }

        acc.get(todo.status)!.todos.push({
            $id: todo.$id,
            $createdAt: todo.$createdAt,
            title:todo.title,
            status: todo.status,
            //get image only if it exists on the todo
            ...(todo.image && {image: JSON.parse(todo.image)}),
        });
        return acc;

    }, new Map<TypedColumn, Column>());

   console.log(columns.get("todo"));
};



