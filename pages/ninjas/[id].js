import Head from 'next/head';

export const getStaticPaths = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    const paths = data.map((ninja) => {
        return {
            params: {id: ninja.id.toString()}
        }
    })
    return {
        paths: paths,
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await response.json();

    return {
        props: {ninja: data}
    }
}

const Details = ({ninja}) => {
    return ( 
        <>
            <Head>
                <title>Ninja List | Details</title>
                <meta name="keywords" content="ninjas"/>
            </Head>
            <div>
                <h1>{ninja.name}</h1>
                <p>{ninja.email}</p>
                <p>{ninja.website}</p>
                <p>{ninja.address.city}</p>
            </div>
        </>
     );
}
 
export default Details;