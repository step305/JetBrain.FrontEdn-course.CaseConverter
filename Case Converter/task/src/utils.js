
function replace_char_at(str, indx, new_char) {
    return str.substr(0, indx) + new_char + str.substr(indx + 1);
}

function convert_to_upper_case(str) {
    return str.toUpperCase();
}

function convert_to_lower_case(str) {
    return str.toLowerCase();
}

function convert_to_proper_case(str) {
    let new_str = str.toLowerCase();

    let str_array = new_str.split(" ");
    str_array.forEach(function (elem, index, arr) {
        arr[index] = replace_char_at(elem, 0, elem.charAt(0).toUpperCase());
    });
    new_str = str_array.join(" ");

    str_array = new_str.split("\n");
    str_array.forEach(function (elem, index, arr) {
        arr[index] = replace_char_at(elem, 0, elem.charAt(0).toUpperCase());
    });
    new_str = str_array.join("\n");
    return new_str;
}

function convert_to_sentence_case(str) {
    let new_str = str.toLowerCase();

    let str_array = new_str.split(".");
    str_array.forEach(function (elem, index, arr) {
        let first_letter_index = elem.search(/\p{Letter}/u);
        arr[index] = replace_char_at(elem, first_letter_index, elem.charAt(first_letter_index).toUpperCase());
    });
    new_str = str_array.join(".");

    str_array = new_str.split("!");
    str_array.forEach(function (elem, index, arr) {
        let first_letter_index = elem.search(/\p{Letter}/u);
        arr[index] = replace_char_at(elem, first_letter_index, elem.charAt(first_letter_index).toUpperCase());
    });
    new_str = str_array.join("!");

    str_array = new_str.split("?");
    str_array.forEach(function (elem, index, arr) {
        let first_letter_index = elem.search(/\p{Letter}/u);
        arr[index] = replace_char_at(elem, first_letter_index, elem.charAt(first_letter_index).toUpperCase());
    });
    new_str = str_array.join("?");

    return new_str;
}

function btn_upper_case_callback(event) {
    let text_field = document.getElementById(event.currentTarget.target_text_field_id);
    text_field.value =
        convert_to_upper_case(text_field.value);
}

function btn_lower_case_callback(event) {
    let text_field = document.getElementById(event.currentTarget.target_text_field_id);
    text_field.value =
        convert_to_lower_case(text_field.value);
}

function btn_proper_case_callback(event) {
    let text_field = document.getElementById(event.currentTarget.target_text_field_id);
    text_field.value =
        convert_to_proper_case(text_field.value);
}

function btn_sentence_case_callback(event) {
    let text_field = document.getElementById(event.currentTarget.target_text_field_id);
    text_field.value =
        convert_to_sentence_case(text_field.value);
}

function btn_save_txt_callback(event) {
    let text_field = document.getElementById(event.currentTarget.target_text_field_id);
    let text = convert_to_sentence_case(text_field.value);
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', "text.txt");
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
