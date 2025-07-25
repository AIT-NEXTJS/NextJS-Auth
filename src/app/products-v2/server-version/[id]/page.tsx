export default async function ProductDetails({ 
params,

 }: { 
params: { id: string } }) {
	const id =params.id;
	return <div>Id - {id}</div>;
}
