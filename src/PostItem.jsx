export default function PostItem({ post, AabnDialog }) {

    return (
        <article className="aktivitet">
            <p>{post.acf.aktivitet}</p>
            <p>{post.acf.sted}</p>
            <p>{post.acf.tidspunkt}</p>
            <p><button onClick={AabnDialog} value={post.id}>Vis mig</button></p>
        </article>

    );
}