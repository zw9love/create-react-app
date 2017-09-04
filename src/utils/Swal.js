/**
 * Created by zengwei on 2017/9/2
 */

import swal from 'sweetalert2'

let bgColor = '#282828'

export function success(title, text) {
    swal({
        type: 'success',
        title: title,
        text: text,
        showCancelButton: false,
        confirmButtonText: '确定',
        confirmButtonColor: '#4a4a4a',
        allowOutsideClick: false,
        confirmButtonClass: 'confirmButtonClass',
        background: bgColor,
        customClass: 'customClass'
    }).then(function () {

    }, function (dismiss) {

    })
}