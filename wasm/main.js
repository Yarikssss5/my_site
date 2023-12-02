import init, {read_md_to_site} from '/wasm/md_conv.js';

export async function open_md(md_path) {
    let md_line = "";
    await fetch(md_path)
                .then((res) =>res.text())
                .then((text) => { md_line = text })
                .catch((e) => console.log("Error: ", e));
    await init(); // Подгружаем и инициализируем wasm и функции в нём
    md_line = read_md_to_site(md_line);
    document.querySelector("#md_insert_data").innerHTML = md_line;
    
}