/*----------------------- generating menu method ------------------ */
    function createMenu() {
        /*-------------------- travering argument method ----------------------*/
            for(var menuArgIndex in createMenu.arguments)
            {
                /*-------------------- check argument type object  ----------------------*/
                    if(typeof createMenu.arguments[menuArgIndex] =="object" && window.Array.isArray(createMenu.arguments[menuArgIndex])==false)
                    {
                       // alert("ok")
                    }
                    else
                    {
                        window.console.log("متاسفانه   در تابع createMenu مشکلی در ارگومان شماره " +( (window.Number(menuArgIndex)) + 1 ) + " که  " + createMenu.arguments[menuArgIndex] + " است وجود دارد امکان دارد او از نوع " + typeof createMenu.arguments[menuArgIndex] + "باشد و ساخت منو را دچار مشکل کند شما باید نوع را از " + "object کنید  تا منو ساز درست کار کند")
                    }
                /*-------------------- check argument type object  ----------------------*/
            }
        /*-------------------- travering argument method ----------------------*/
    }
/*----------------------- generating menu method ------------------ */


/*----------------------- generating tag method ------------------ */
function tagGenerator() {

    /*-------------------- travering argument method ----------------------*/
        for(var tagGeneratorIndex in tagGenerator.arguments)
        {
                var courentObj ;
                var tagGeneratedElement ;
                var generatedTagCheck = false;
                var attrGenerate ;
            /*-------------------- check argument type object  ----------------------*/
                if(typeof tagGenerator.arguments[tagGeneratorIndex]=="object" && window.Array.isArray(tagGenerator.arguments[tagGeneratorIndex]) ==false)
                {
                    /*----------------- traversing to object generate tag ---------------*/
                        for(var tagObjIndex in tagGenerator.arguments[tagGeneratorIndex])
                        {

                            courentObj= tagGenerator.arguments[tagGeneratorIndex][tagObjIndex];
                                /*--- checking propertys --------------*/
                                    switch (tagObjIndex)
                                    {
                                        /*---------- create tag  ------------- */
                                                case "tagName":
                                                        /*------- checking string tag name ---------------*/

                                                                if(typeof courentObj ==="string")
                                                                {
                                                                    /* ------------- checking valid tag html  -------------*/

                                                                        if(window.Object.prototype.toString.call(window.document.createElement(courentObj))!="[object HTMLUnknownElement]")
                                                                        {
                                                                            tagGeneratedElement = window.document.createElement(courentObj);
                                                                            generatedTagCheck=true;
                                                                        }
                                                                        else
                                                                        {
                                                                            //error msg
                                                                            window.console.log("متاسفانه تگ " + courentObj + " معتبر نیست  ");
                                                                        }

                                                                    /* -------------  checking valid tag html  -------------*/

                                                                }
                                                                else
                                                                {
                                                                        //error msg
                                                                        window.console.log("متاسفانه تگ " + courentObj+ " باید از نوع string باشد ")
                                                                }
                                                    /*------- checking string tag name ---------------*/

                                                 break;
                                        /*---------- create tag  ------------- */

                                        /*---------- create attribute TaG  ------------- */
                                                case "tagAttr":
                                                    /* generating tag checker and check type courent peroperty */
                                                        if(generatedTagCheck==true && typeof courentObj=="object" &&  window.Array.isArray(courentObj)==false && courentObj!=null)
                                                        {
                                                            /*---- switch peroperty attribute json ---------- */
                                                                for(var attrIndex in courentObj)
                                                                {
                                                                  /*------ clreate attributes not class ----------*/
                                                                    if(attrIndex!="class")
                                                                    {
                                                                        attrGenerate = window.document.createAttribute(attrIndex);
                                                                        attrGenerate.value = courentObj[attrIndex];
                                                                        tagGeneratedElement.setAttributeNode(attrGenerate);
                                                                    }
                                                                    /*------- create class attribute ------------ */

                                                                    else if(attrIndex.match(/(class)/igm) !=null)
                                                                    {

                                                                        /*------- check class array ---------- */

                                                                            if(typeof courentObj[attrIndex]=="object" && window.Array.isArray(courentObj[attrIndex])==true)
                                                                            {
                                                                                /*--------- get class lists ---------*/
                                                                                    for (var classListIndex in courentObj[attrIndex])
                                                                                    {
                                                                                        /*------------check there is attr--------*/
                                                                                            if(tagGeneratedElement.classList.contains(courentObj[attrIndex][classListIndex])==false)
                                                                                                tagGeneratedElement.classList.add(courentObj[attrIndex][classListIndex]);
                                                                                            else
                                                                                            {
                                                                                                //code
                                                                                                window.console.log("متاسفانه اتری بیوت " + courentObj[attrIndex][classListIndex] + " قبلا وجود داشته ")
                                                                                            }
                                                                                        /*------------check there is attr--------*/


                                                                                    }
                                                                                /*--------- get class lists ---------*/
                                                                            }
                                                                        /*------- check class array ---------- */
                                                                    }
                                                                }
                                                            /*---- switch peroperty attribute json ---------- */
                                                        }
                                                        else if(generatedTagCheck==false&& courentObj!=null)
                                                                 {
                                                                    // code
                                                                    window.console.log("متاسفانه تگ ساخته نشده ")
                                                                }
                                                              else if(typeof courentObj!="object" ||  window.Array.isArray(courentObj)==true && courentObj!=null)
                                                                    {
                                                                        // code
                                                                        window.console.log("متاسفانه نوع  ابجکت اتری بیوت ها معتبر نیست  ")
                                                                    }

                                                    /* generating tag checker and check type courent peroperty */
                                                break;

                                        /*---------- create attribute TaG  ------------- */

                                    }
                                /*--- checking propertys --------------*/

                        }
                    /*----------------- traversing to object generate tag ---------------*/


                }
                else
                {
                    window.console.log("متاسفانه   در تابع tagGenerator مشکلی در ارگومان شماره " +( (window.Number(tagGeneratorIndex)) + 1 ) + " که  " + tagGenerator.arguments[tagGeneratorIndex] + " است وجود دارد امکان دارد او از نوع " + typeof tagGenerator.arguments[tagGeneratorIndex] + "باشد و ساخت منو را دچار مشکل کند شما باید نوع را از " + "object کنید  تا تگ ساز درست کار کند")
                }
            /*-------------------- check argument type object  ----------------------*/
        }
    /*-------------------- travering argument method ----------------------*/

}
/*----------------------- generating tag method ------------------ */
