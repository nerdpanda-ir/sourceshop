/* ----------------- attach event loading page --------------- */

    window.addEventListener('load',function () {

        /*---------- create object topNav menu ---------------*/
            var topNavMenu = {

            }

        /*---------- create object topNav menu ---------------*/

        /*---------- create object tag object ---------------*/
            var tagGeneratorObj =
                {
                        tagName: 'span'
                    ,

                        tagAttr:/*null*/
                            {
                                    atr1: "value "
                                ,
                                    atr2: "value"
                                ,
                                    class :["fa"]
                            }
                    ,

                         appendParent:
                            {
                                elementParent: null
                                ,
                                classParents: ['class1', "class2"]
                                ,
                                idParents: ['class1', "class2"]
                                ,
                                parentSelector: " selector "

                            }
                    ,
                        returning: true

                }

        /*---------- create object tag object ---------------*/





        /*--------- call tag generator ----------------------*/
            tagGenerator(tagGeneratorObj);
        /*--------- call tag generator ----------------------*/

    })
/* ----------------- attach event loading page --------------- */