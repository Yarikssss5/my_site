const my_functions = {
    get_info_from_txt: async function() {
        fetch(file_path)
            .then(response => response.text())
            .then(data => {
                document.getElementById("md_insert_data").innerHTML = toString(data);
                console.log(data);
        });
    }
}


export const get_info_from_txt = my_functions.get_info_from_txt;