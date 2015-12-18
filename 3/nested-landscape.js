function landScape() {
	result = "";
	function plain(size) {
		for (var i = 0; i < size; i++) {
			result = result + "_";
		}
	};

	function mountain(size) {
		result = result + "/";
		for (var i = 0; i < size; i++) {
			result = result + "'";
			result = result + "\\";
		}
	};
	
	plain(6);
	mountain(8);
	plain(12);
	mountain(3);
	plain(3);
	return result;
}

console.log(landScape());
