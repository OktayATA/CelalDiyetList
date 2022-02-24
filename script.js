tiklama = false
$("#celal-resim").on("click", function(e){
    if (tiklama == false) {
        $("#celal-resim").addClass("celal-resim-buyuk")
    }else{
        $("#celal-resim").removeClass("celal-resim-buyuk")
    }
    tiklama = !tiklama;
    console.log(tiklama)
});

