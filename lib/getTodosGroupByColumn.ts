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

    //if no columns exist, create default columns
    const columnTypes: TypedColumn[] = ["todo", "inprogress", "done"]
    for(const columnType of columnTypes){
    if(!columns.get(columnType)){
        columns.set(columnType, {
            id: columnType,
            todos: [],
        });
    }
    }
    // sort columns by columnTypes
    const sortedColumns = new Map(
        Array.from(columns.entries()).sort((a, b) => 
        columnTypes.indexOf(a[0]) - columnTypes.indexOf(b[0])
        )
    )
    const Board: Board = {
        columns: sortedColumns,
    };

    return Board;
};



