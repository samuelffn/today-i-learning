//Para não deixar repetir os objetos no array:
if (serviceOrderNumbers && filters && filters.objectList) {
	serviceOrderNumbers = serviceOrderNumbers.map(so => {return {svcOrderNo: so}});
	const objectList = JSON.parse(JSON.stringify(filters.objectList));
	const concatSONumbers = serviceOrderNumbers.concat(objectList);
	
	// Nessa parte aqui:
	filters.objectList = concatSONumbers.filter((v,i,a)=>a.findIndex(
		t=>(JSON.stringify(t) === JSON.stringify(v)))===i);
}
