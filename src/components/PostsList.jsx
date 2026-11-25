// #region IMPORTS 
import PostItem from "./PostItem";

//#endregion IMPORTS 

export default function PostsList({ posts }) {

    return (
        <div className="flex w-full flex-col gap-6">
            {/* precorre o arry de dados recebido como props para a função */}
            {posts.map((post) => (
                <PostItem key={post.id} post={post} />
            ))}

        </div>
    );
}