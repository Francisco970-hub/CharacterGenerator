x?/?blob 711 ?PNG

   IHDR           szz?   bKGD ? ? ?????  |IDATX????hQ??W?Q(%??N?R?HA?P
1P????иt???s?C2?L 8X\LE	D?49b1?(?s?zw?{?.]???~????????#h~3c??????
?\ƌ再n?L??????I???5?_i???1ǘ}?>?"???????r>2??1G5????y?a2?zdr?q?b0?2IM?5??0?6p ????H????a?8??c??H{@????v??_???栘 ??G+L???찷?{D	??ϙ?:n??[? (?~˧??<??Ui?A{?Ґ_ @-?3#?Q?V??	??驄5'2?@?!/?P As? n?^???k?uJ??8??2??_??5 *???P!Iz??????1H????W-??j?a??톱??J?hy?3?#p?ޱk?d ??q???ޯ?Α&?+??J*???[3$?֬??????D?h???>?G?'?7H?#$.??%}?7v}n~#{????????N?C????XϞ????m?&H?_?@?>0Zm?q??P n?H?u}???0?דdϥ?]??eW?ʦ? @`W?oA??????ϋ?]?/?4??Ǫ?%e ?eI?nc??D/$???; t???????D'?/???1??x?    IEND?B`?PL9                                                                                                                                                                                                                                                                                                     var eyearrs = [eyeb1arr,eyeb2arr,eyeb3arr]

  var paths = [earFolder, headFolder, piercingFolder];
  var arrs = [ eararr,headarr, piercingarr];

  try {
    for (let index = 0; index < paths.length; index++) {
      const files = await fs.readdir(paths[index]);
      for (const file of files) {
        arrs[index].push(file);
      }
    }

    for (let inde = 0; inde < hairpaths.length; inde++) {
      const files = await fs.readdir(hairpaths[inde]);
      for (const file of files) {
        hairarrs[inde].push(file);
      }
    }

    for (let ind = 0; ind < eyepaths.length; ind++) {
      const files = await fs.readdir(eyepaths[ind]);
      for (const file of files) {
        eyearrs[ind].push(file);
      }
    }
  } catch (err) {
    console.error(err);
  }


  const width = 32;
  const height = 32;
  const canvas = createCanvas(width, height);
  const context = canvas.getContext("2d");

  for (let i = 0; i < headarr.length; i++) {
    await loadImage(`${headFolder}${headarr[i]}`).then(async (image1) => {
      for (let b = 0 ; b< hairarrs.length ; b++) {
        for(let j = 0; j < hairarrs[b].length; j++){
        await loadImage(`${hairpaths[b]}${hairarrs[b][j]}`).then(async (image2) => {
          for(let v=0; v<eyearrs.length;v++){
          for (let k = 0; k <eyearrs[v].length; k++) {
            await loadImage(`${eyepaths[v]}${eyearrs[v][k]}`).then(async (image3) => {
              for (let l = 0; l < piercingarr.length; l++) {
                await loadImage(`${piercingFolder}${piercingarr[l]}`).then(
                  async (image4) => {
                for(let e = 0; e< eararr.length; e++){
                  await loadImage(`${earFolder}${eararr[e]}`).then(async (image5) => {
                    context.clearRect(0, 0, canvas.width, canvas.height);
                    /// render image1\\
                    context.drawImage(image1, 0, 0, 32, 32);

                    /// render image2\\
                    if (j >= 0 && j <= 8) {
                      if(e===0){
                        context.drawImage(image5, 0, 0, 0, 0);
                      }
                      if(e===1){
                        context.drawImage(image5, 15, 15, 16, 16);
                      }
                      if(l === 0){
                        context.drawImage(image4, 0, 0, 0, 0);
                      }
                      if(l === 1){
                        context.drawImage(image4, 6, 17, 16, 16);
                      }

                      context.drawImage(image3, 7, 9, 16, 16);
                      context.drawImage(image2, -1, 3, 32, 32);
                    }
                    if (j >= 9 && j <= 17) {
                      if(e===0){
                        context.drawImage(image5, 0, 0, 0, 0);
                      }
                      if(e===1){
                        context.drawImage(image5, 15, 15, 16, 16);
                      }
                      if(l === 0){
                        context.drawImage(imagex??blob 727 ?PNG

   IHDR           szz?   bKGD ? ? ?????  ?IDATX????h?@???@?).??^?A??S?1?ZJ?Y??%m?&K	<xs:?S????T(${?????E?:???-???u0?,?'Er?v??t?~߽{z?Z?+?jྔg?D ?????:?	?&J?ü61M?7? ?t"??f3К?&???ڐC?΀??׈??ZAf?a??\???5?7???MF\_?
2?w?w?y???G?ƞ??jCP??0??@ @7L????jC<y?'?uΧM?h?y??3???????	?y???T:?ذ>?????E?/`[wӺ??????x?l??*r?f??&K?H<??;l<????a??/ݟ|q?Z??k?o??$?7`ui- 2B??? ?|3?Ì? ,j?K?"??-?X?|?|???䢄?1??I??T9!0?Iڲ?!??E?~ 8{u 4?Zz?z?????'6???Qq?LR?u?^??ہ?u+?0??^p?.?	?X??ӖJ????Z?>780?	??5??"r'?<?.eYأo#??:??Eb??͜n?ht?B?o߰?/??;???؏?7??:??ɯF?* ?O?C?)!p?@? ???m???GG? ~??D?脯&???5??lcʣ?60?ڮ} ?KyaA?-x?????C/?u 3    IEND?B`?Gs                                                                                                                                                                                                                                                                                     

                    const buffer = canvas.toBuffer();
                    await fs.writeFile(
                      `generated/humans/${i+1}-${j+1}-${k+1}-${l+1}-${e+1}.png`,
                      buffer
                    );
                  }
                );
                };
              })
            }
            });
          }
        }
        });
      }
    }
    });
  }
}

//done
async function genApe() {
  const bodyFolder = "./assets/human_assets/body/";
  const eyeFolder = "./assets/ape_assets/eye/";
  const hairFolder = "./assets/ape_assets/hair/";
  const piercingFolder = "./assets/ape_assets/piercing/";
  const mouthFolder = "./assets/ape_assets/mouth/";
  const earFolder = "./assets/ape_assets/ear/";
  //var bodyarr = [];
  var eyearr = [];
  var hairarr = [];
  var piercingarr = [];
  var moutharr = [];
  var eararr = [];

  var paths = [eyeFolder, hairFolder, piercingFolder, mouthFolder, earFolder];
  var arrs = [eyearr, hairarr, piercingarr, moutharr, eararr];

  try {
    for (let index = 0; index < paths.length; index++) {
      const files = await fs.readdir(paths[index]);
      for (const file of files) {
        arrs[index].push(file);
      }
    }
  } catch (err) {
    console.error(err);
  }

  const width = 32;
  const height = 32;
  const canvas = createCanvas(width, height);
  var context = canvas.getContext("2d");
  var previous;

  for (let i = 0; i < hairarr.length; i++) {
    await loadImage(`${hairFolder}${hairarr[i]}`).then(async (image1) => {
      for (let j = 0; j < eyearr.length; j++) {
        await loadImage(`${eyeFolder}${eyearr[j]}`).then(async (image2) => {
          for (let m = 0; m < moutharr.length; m++) {
            await loadImage(`${mouthFolder}${moutharr[m]}`).then(
              async (image3) => {
                for (let k = 0; k < piercingarr.length; k++) {
                  await loadImage(`${piercingFolder}${piercingarr[k]}`).then(
                    async (banner) => {
                      for (let e = 0; e < eararr.length; e++) {
                        await loadImage(`${earFolder}${eararr[e]}`).then(
                          async (image4) => {
                            context.clearRect(
                              0,
                              0,
                              canvas.width,
                              canvas.height
                            );

                            context.drawImage(image1, 0, 0, 32, 32);

                            if (i >= 9 && i <= 17) {
                              context.drawImage(image2, 6, 8, 16, 16);
                              if (m === 0) {
                                context.drawImage(image3, 6, 14, 16, 16);
                              }
                              if (m === 1) {
                                context.drawImage(image3, 5, 14, 16, 16);
                              }
                              if (k === 1) {
                                context.drawImage(x? ?blob 758 ?PNG

   IHDR           szz?   bKGD ? ? ?????  ?IDATX???MHTa????0f?&D??V??h1?(?A?6a?ʔ?pW???Z?(h?8?-?E??N)1D$?-?"?Ĥ?&5?F???{s????-???????}?????C?ty$??#EWTR-?Tkƙ?????(????#?????u5???l????T%?h?F-@O?lA? ?(?(? ???У??Y????$?U`??̜|A??a?{?-????CWXs?X?&@?L>?u,??????lsӊ?Y????{A5;?R?r%??=O?V????Ka~??l?hd?2?|?Gc(???x?ö?f;?
}Ͻ??L?*?]0;3??? ?m??? ^=??4?y???J^??V??????yy6?R?;???4?I?Z?ܩ??t??-6???ΑED?M???&?ƾDN?Y???s"'?w??)?Hgk?z F??eS?v?DP?Au{wK?]I???bkir?c?{ӱd?8???ޱy?n-ع?"?	z{5??s]??( ?96?)?]a?rRuXIp?pq????J??k"??"???#p7{??~ ?u?	??b\:V@[?????E?MO?at???????	2??
9@?î?????m?*8?څco!????|ok????
/j8])?4)?4i廼v?<?y?n??foCJmB???ġj?y???_??q0 >0????1??_????0?s    IEND?B`??._?                                                                                                                                                                                                                                                                 context.drawImage(image3, 4, 14, 16, 16);
                              }
                              if (k === 1) {
                                context.drawImage(banner, 4, 15, 16, 16);
                              }
                              if (e === 1) {
                                context.drawImage(image4, 15, 17, 16, 16);
                              }
                              if (e === 0) {
                                context.drawImage(image4, 0, 0, 0, 0);
                              }
                              if (k === 2) {
                                context.drawImage(banner, 4, 14, 16, 16);
                              }
                              if (k === 0) {
                                context.drawImage(banner, 0, 0, 0, 0);
                              }
                            } else if (i >= 27 && i <= 35) {
                              context.drawImage(image2, 6, 8, 16, 16);
                              if (m === 0) {
                                context.drawImage(image3, 6, 13, 16, 16);
                              }
                              if (m === 1) {
                                context.drawImage(image3, 5, 13, 16, 16);
                              }
                              if (k === 1) {
                                context.drawImage(banner, 5, 14, 16, 16);
                              }
                              if (e === 1) {
                                context.drawImage(image4, 15, 17, 16, 16);
                              }
                              if (e === 0) {
                                context.drawImage(image4, 0, 0, 0, 0);
                              }
                              if (k === 2) {
                                context.drawImage(banner, 5, 13, 16, 16);
                              }
                              if (k === 0) {
                                context.drawImage(banner, 0, 0, 0, 0);
                              }
                            } else if (i >= 0 && i <= 8) {
                              context.drawImage(image2, 5, 7, 16, 16);
                              if (m === 0) {
                                context.drawImage(image3, 5, 12, 16, 16);
                              }
                              if (m === 1) {
                                context.drawImage(image3, 4, 12, 16, 16);
                              }
                              if (k === 0) {
                                context.drawImage(banner, 0, 0, 0, 0);
                              }
                              if (k === 1) {
                                context.drawImage(banner, 4, 16, 16, 16);
                              }
                              if (e === 1) {
                                context.drawImage(image4, 15, 15, 16, 16);
                              }
                              if (e === 0) {
                                context.drawImage(image4, 0, 0, 0, xK??blob 834 ?PNG

   IHDR           szz?   bKGD ? ? ?????  ?IDATX???OHQ??j????۲?B???A???????xR??Ƀ?I(:F*?Ih3<tڃ??E? x? ?^??lQ?f?t???t??4??????~a`???????~???8??F?l??;yh??m1;?$?Q?z?c?'????ʚ??+?mӒ?IA???w?O??]?(?m1\>?p????B??iD`/?P?Q?j*{????OI nX"??M??ilis?????1-i?3ճ???ӥ(h?+`LK?u??Y?S{??UnC?0R???????ۗ?v??o?h?\f?f-??R-?`5??/Tx?d?? ??  ?????e==?j'(?Z?M?g/??]e%??lǢ1-i???T????"?n?8?R???????EJյ?/?"?=?????????# [? ?ՐV 59jJM"?q챒X??c?%;?????KO?KOX?J???O90??Y <? ?P?h/(? `f???;????Ҭŋ?$?x??+?w????e1-i?^C?X[.??@??<?]D?R??6X??\??)????H????۱??s?v?vx???}v߄"?8~????F̋./$?xT??l??T4?
?;?J??Ա0?,s?6U?E?㳐ۉ???۰Tr(b=bi?A???e???R?P?!ny~?Ս?lB7䆞q4-?׼R???4?D7+?~Zc??J?]??A?[R;????8˭'?????!Y?߷?ת?4u>sCiY? ??>+?9???bE?0    IEND?B`?
?*                                                                                                                                                                          _assets/piercing/";
  const bigodesFolder = "./assets/cat_assets/bigode/";
  const scarFolder = "./assets/cat_assets/scar/";
  const tongueFolder = "./assets/cat_assets/tongue/";

  //var bodyarr = [];
  var eyearr = [];
  var headarr = [];
  var piercingarr = [];
  var bigodesarr = [];
  var scararr = [];
  var tonguearr = [];

  var paths = [
    eyeFolder,
    headFolder,
    piercingFolder,
    bigodesFolder,
    scarFolder,
    tongueFolder,
  ];
  var arrs = [eyearr, headarr, piercingarr, bigodesarr, scararr, tonguearr];

  try {
    for (let index = 0; index < paths.length; index++) {
      const files = await fs.readdir(paths[index]);
      for (const file of files) {
        arrs[index].push(file);
      }
    }
  } catch (err) {
    console.error(err);
  }

  const width = 32;
  const height = 32;
  const canvas = createCanvas(width, height);
  const context = canvas.getContext("2d");

  for (let i = 0; i < headarr.length; i++) {
    await loadImage(`${headFolder}${headarr[i]}`).then(async (image1) => {
      for (let j = 0; j < eyearr.length; j++) {
        await loadImage(`${eyeFolder}${eyearr[j]}`).then(async (image2) => {
          for (let b = 0; b < bigodesarr.length; b++) {
            await loadImage(`${bigodesFolder}${bigodesarr[b]}`).then(
              async (image3) => {
                for (let k = 0; k < piercingarr.length; k++) {
                  await loadImage(`${piercingFolder}${piercingarr[k]}`).then(
                    async (banner) => {
                      for (let s = 0; s < scararr.length; s++) {
                        await loadImage(
                          `${scarFolder}${scararr[s]}`
                        ).then(async (image4) => {
                          for(let t=0; t<tonguearr.length; t++){
                            await loadImage(
                              `${tongueFolder}${tonguearr[t]}`
                            ).then(async (image5) => {
                          context.clearRect(0, 0, canvas.width, canvas.height);
                          context.drawImage(image1, 0, 0, 32, 32);
                          context.drawImage(image2, 7, 8, 16, 16);
                          if (b === 0 || b === 1) {
                            context.drawImage(image3, 5, 14, 16, 16);
                          }
                          if (b === 2) {
                            context.drawImage(image3, 4, 14, 16, 16);
                          }
                          if (b === 3) {
                            context.drawImage(image3, 5, 14, 16, 16);
                          }
                          if (k === 0) {
                            context.drawImage(banner, 0, 0, 0, 0);
                          }
                          if (k === 1) {
                            context.drawImage(banner, 5, 14, 16, 16);
                          }
                          if (k === 2) {
                            context.drawImage(banner, 6, 15, 16, 16);
                          }
   x>??blob 821 ?PNG

   IHDR           szz?   bKGD ? ? ?????  ?IDATX??V1HQ?"K?JAE\J?Nr?&?zq?SөXI
?Rk?$Ft??bRE:R? ???-Ш??W%?`??m??됾ǻ?{?;t????????????\????[?2??dAJϨ}pD?5?W2??~?6?)????=???gӪby!մν???U ??`??8???sC????9:????* F?`????z?p???=J?XW?D @??T&??z'?	 ???|???[.  zgg???Z	#??4?!?OOR#]?b???7xB?/A?YBӪ??F?@	!?)/??????/PӪbdl?k%_?J??k6???{l?`?K+? ??!??c??Η	= ??T?2?y{< ?v_??J??????]wĲ???yfҷH??rͦ,??L?F ?p???G~߫? h? ?nH;???y?,????ǧ??<??G?҅(?lڎ?????_}z?q?5w3C|M;B?>8???Q???<96j{?E?ѕ??+??*???x??]?FmO?ϡ?>???T@%B*@l???:?????Ny??gg&?P?N4hvf?i???d
????ܘ?.:f?iU???;ҁ??M?&d???Յ?EB@?.w?wG:p?;????l; EĿ??|B?ѝTV????F??q|r???\P????~15??6 ?I؎?ҵ???Rz4?G?u"z~\FnZU???#?JǱ?.?ՅW???r??/?i??	???3x~??R?X??1?Zվ0???U????????9?i??    IEND?B`???                                                                                                                                                                                                           }
                  );
                }
              }
            );
          }
        });
      }
    });
  }
  //return(bodyarr);
}

//done
async function genDawg() {
  const headFolder = "./assets/dog_assets/hair/";
  const eyeFolder = "./assets/dog_assets/eye/";
  const piercingFolder = "./assets/dog_assets/piercing/";
  const scarFolder = "./assets/dog_assets/scar/";
  const tongueFolder = "./assets/dog_assets/tongue/";
  //var bodyarr = [];
  var eyearr = [];
  var headarr = [];
  var piercingarr = [];
  var scararr = [];
  var tonguearr = [];

  var paths = [eyeFolder, headFolder, piercingFolder, scarFolder, tongueFolder];
  var arrs = [eyearr, headarr, piercingarr, scararr, tonguearr];

  try {
    for (let index = 0; index < paths.length; index++) {
      const files = await fs.readdir(paths[index]);
      for (const file of files) {
        arrs[index].push(file);
      }
    }
  } catch (err) {
    console.error(err);
  }

  const width = 32;
  const height = 32;
  const canvas = createCanvas(width, height);
  const context = canvas.getContext("2d");

  for (let i = 0; i < headarr.length; i++) {
    await loadImage(`${headFolder}${headarr[i]}`).then(async (image1) => {
      for (let j = 0; j < eyearr.length; j++) {
        await loadImage(`${eyeFolder}${eyearr[j]}`).then(async (image2) => {
          for (let k = 0; k < piercingarr.length; k++) {
            await loadImage(`${piercingFolder}${piercingarr[k]}`).then(
              async (banner) => {
                for (let s = 0; s < scararr.length; s++) {
                  await loadImage(`${scarFolder}${scararr[s]}`).then(
                    async (image4) => {
                      for (let t = 0; t < tonguearr.length; t++) {
                        await loadImage(`${tongueFolder}${tonguearr[t]}`).then(
                          async (image5) => {
                            context.clearRect(
                              0,
                              0,
                              canvas.width,
                              canvas.height
                            );
                            context.drawImage(image1, 0, 0, 32, 32);

                            if (i >= 0 && i <= 8) {
                              context.drawImage(image2, -2, 5, 32, 16);
                              if (t === 0) {
                                context.drawImage(image5, 0, 0, 0, 0);
                              }
                              if (t === 1) {
                                context.drawImage(image5, 2, 20, 16, 16);
                              }
                              if (s === 0) {
                                context.drawImage(image4, 0, 0, 0, 0);
                              }
                              if (s === 1) {
                                context.drawImage(image4, 10, 7, 16, 16);
                              }
                              if (k === 0) {
                                context.drawImax??blob 788 ?PNG

   IHDR           szz?   bKGD ? ? ?????  ?IDATX??V?hSA?E?
J?q?֮??4??BK3?NEmH???$4?Y\j??d????G??[?gJ??E!?X"
??9?w?K???????????????????B?f5??}???>???kA?>???3ln????>J?ݧ 0w?????v???????AC7?W|<S  ??o0????(l???蘏??^_N?  ?V?? U??8?ZU???!?xA??????;I ???w?xתbsc???e|5
 ????M??#aD"????֢k???a???C;	??[F?p??;\??}B?(|??V?hk???8?H??C ????O]6?R?ըg(?Yv??E˥?? 0N|?~???v??B L??R?f) ,??X??? `)?%%?0[m:&?_?HQJO?6R?c6/?|~?????*??1l?=|?'?'?QOl?"?E?l?QzX???,Ŷ?_I?K%?lu`D?X{? ?	?]??E4??+-?6ʥ?y!??i>d?/?????`?:?^aD??5?=?b?5????q8?B2?????U̇?#W?_R? ????IRj?+6??F=a???/???"?-/pC???jT???%kS??\?X/&!8l?9<??R?????<?^`?f??^??<??Pd5????56?F<???"S???%f?|?d?]c?Ě????TO??!???????}?7N    IEND?B`??n_                                                                                                                                                                                                                        
                                context.drawImage(image4, 10, 7, 16, 16);
                              }
                              if (k === 0) {
                                context.drawImage(banner, 0, 0, 0, 0);
                              }
                              if (k === 1) {
                                context.drawImage(banner, 2, 19, 16, 16);
                              }
                              if (k === 2) {
                                context.drawImage(banner, 2, 14, 16, 16);
                              }
                            }
                            if (i >= 18 && i <= 26) {
                              context.drawImage(image2, -2, 5, 32, 16);
                              if (t === 0) {
                                context.drawImage(image5, 0, 0, 0, 0);
                              }
                              if (t === 1) {
                                context.drawImage(image5, 3, 20, 16, 16);
                              }
                              if (s === 0) {
                                context.drawImage(image4, 0, 0, 0, 0);
                              }
                              if (s === 1) {
                                context.drawImage(image4, 10, 7, 16, 16);
                              }
                              if (k === 0) {
                                context.drawImage(banner, 0, 0, 0, 0);
                              }
                              if (k === 1) {
                                context.drawImage(banner, 3, 19, 16, 16);
                              }
                              if (k === 2) {
                                context.drawImage(banner, 3, 15, 16, 16);
                              }
                            }
                            if (i >= 27 && i <= 35) {
                              context.drawImage(image2, -2, 5, 32, 16);
                              if (t === 0) {
                                context.drawImage(image5, 0, 0, 0, 0);
                              }
                              if (t === 1) {
                                context.drawImage(image5, 1, 17, 16, 16);
                              }
                              if (s === 0) {
                                context.drawImage(image4, 0, 0, 0, 0);
                              }
                              if (s === 1) {
                                context.drawImage(image4, 10, 7, 16, 16);
                              }
                              if (k === 0) {
                                context.drawImage(banner, 0, 0, 0, 0);
                              }
                              if (k === 1) {
                                context.drawImage(banner, 1, 12, 16, 16);
                              }
                              if (k === 2) {
                                context.drawImage(banner, 1, 12, 16, 16);
                              }
                            }
                x?`?blob 662 ?PNG

   IHDR           szz?   bKGD ? ? ?????  KIDATX?햱k?P??9?]΃؈? D??? ?`;x?С??????B?R,?KQt?".??p V?@?li??q ???\?{y?%??~!???/?~^?????eT???0?????o?K?O???"?.?2)6??E?#?8w膥A????\?c??A???AT5?C???l????r]XCB??????o`?ً$zR??9?a??tX4ز̓??^? ?jO?Ʊ????w}|66ȿ????2@:?W??4?GU??@????N$ck??%?˟f2?K?8???j?#???	????????M??:} ?A&?u? =?y^? M:??=u??_>??????8s?ׁ?ֵڵd?ҵ????n???Jf??.?W/Jg???a膴l?P???\ -??Qgb???-?M?{? ?]C?Q??@!3??^?X??`??l??ȏ??[??Tpyc>T?? ??????V?:h7???G?s?T? نy5ꇒ?x?N??2.??X]?p{?	 ????A???@l??|GW??J #z?#???q?u?=-i♕??_??1诽 D_Ŗ-O+;?R 1?,^??? ? q./
?    IEND?B`??5                                                                                                                                                                                                                                                                                                                                            