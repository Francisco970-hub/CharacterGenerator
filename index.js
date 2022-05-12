const fs = require("fs").promises;
const { createCanvas, loadImage } = require("canvas");
const { mainModule } = require("process");
const { imgDiff } = require("img-diff-js");
const imageToBase64 = require("image-to-base64");

//done
async function genHumans() {
  //const bodyFolder = "./assets/human_assets/body/";
  const b1 = "./assets/human_assets/hair/b1/";
  const b2 = "./assets/human_assets/hair/b2/";
  const b3 = "./assets/human_assets/hair/b3/";
  const eyeb1 = "./assets/human_assets/eye/b1/";
  const eyeb2 = "./assets/human_assets/eye/b2/";
  const eyeb3 = "./assets/human_assets/eye/b3/";
  const eyeFolder = "./assets/human_assets/eye/";
  const hairFolder = "./assets/human_assets/hair/";
  const headFolder = "./assets/human_assets/head/";
  const earFolder = "./assets/human_assets/ear/";
  const piercingFolder = "./assets/human_assets/piercing/";
  //var bodyarr = [];
  var eyearr = [];
  var hairarr = [];
  var headarr = [];

  var b1arr = [];
  var b2arr = [];
  var b3arr = [];

  var eyeb1arr = [];
  var eyeb2arr = [];
  var eyeb3arr = [];

  var eararr = [];
  var piercingarr = [];
  var hairarrs = [b1arr, b2arr, b3arr];
  var hairpaths = [b1, b2, b3];

  var eyearrs = [eyeb1arr, eyeb2arr, eyeb3arr];
  var eyepaths = [eyeb1, eyeb2, eyeb3];

  var paths = [earFolder, headFolder, piercingFolder];
  var arrs = [eararr, headarr, piercingarr];

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
      for (let b = 0; b < hairarrs.length; b++) {
        for (let j = 0; j < hairarrs[b].length; j++) {
          await loadImage(`${hairpaths[b]}${hairarrs[b][j]}`).then(
            async (image2) => {
              for (let v = 0; v < eyearrs.length; v++) {
                for (let k = 0; k < eyearrs[v].length; k++) {
                  await loadImage(`${eyepaths[v]}${eyearrs[v][k]}`).then(
                    async (image3) => {
                      for (let l = 0; l < piercingarr.length; l++) {
                        await loadImage(
                          `${piercingFolder}${piercingarr[l]}`
                        ).then(async (image4) => {
                          for (let e = 0; e < eararr.length; e++) {
                            await loadImage(`${earFolder}${eararr[e]}`).then(
                              async (image5) => {
                                context.clearRect(
                                  0,
                                  0,
                                  canvas.width,
                                  canvas.height
                                );
                                /// render image1\\

                                if (i === 0) {
                                  context.drawImage(image1, 0, 0, 32, 32);
                                }
                                if (i === 1) {
                                  context.drawImage(image1, 0, 1, 32, 32);
                                }
                                if (i === 2) {
                                  context.drawImage(image1, 0, 0, 32, 32);
                                }

                                /// render image2\\
                                if (j >= 0 && j <= 8) {
                                  context.drawImage(image3, 7, 9, 16, 16);
                                  if (e === 0) {
                                    context.drawImage(image5, 0, 0, 0, 0);
                                  }
                                  if (e === 1) {
                                    context.drawImage(image5, 15, 15, 16, 16);
                                  }
                                  if (l === 0) {
                                    context.drawImage(image4, 0, 0, 0, 0);
                                  }
                                  if (l === 1) {
                                    context.drawImage(image4, 6, 12, 16, 16);
                                  }
                                  context.drawImage(image2, -1, 3, 32, 32);
                                }
                                if (j >= 9 && j <= 17) {
                                  context.drawImage(image3, 7, 9, 16, 16);
                                  if (e === 0) {
                                    context.drawImage(image5, 0, 0, 0, 0);
                                  }
                                  if (e === 1) {
                                    context.drawImage(image5, 16, 15, 16, 16);
                                  }
                                  if (l === 0) {
                                    context.drawImage(image4, 0, 0, 0, 0);
                                  }
                                  if (l === 1) {
                                    context.drawImage(image4, 6, 12, 16, 16);
                                  }

                                  context.drawImage(image2, -2, 4, 32, 32);
                                }
                                if (j >= 18 && j <= 26) {
                                  context.drawImage(image3, 7, 9, 16, 16);
                                  if (e === 0) {
                                    context.drawImage(image5, 0, 0, 0, 0);
                                  }
                                  if (e === 1) {
                                    context.drawImage(image5, 16, 15, 16, 16);
                                  }
                                  if (l === 0) {
                                    context.drawImage(image4, 0, 0, 0, 0);
                                  }
                                  if (l === 1) {
                                    context.drawImage(image4, 6, 12, 16, 16);
                                  }
                                  context.drawImage(image2, -1, -1, 32, 16);
                                }
                                const buffer = canvas.toBuffer();
                                await fs.writeFile(
                                  `generated/humans/${i + 1}-${j + 1}-${
                                    k + 1
                                  }-${l + 1}-${e + 1}.png`,
                                  buffer
                                );
                              }
                            );
                          }
                        });
                      }
                    }
                  );
                }
              }
            }
          );
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

                            if (i >= 9 && i <= 17) {
                              context.drawImage(image1, -1, -2, 32, 32);
                              if (j === 0 || j === 1 || j === 2) {
                                context.drawImage(image2, 5, 7, 16, 16);
                              } else if (
                                j === 3 ||
                                j === 4 ||
                                j === 5 ||
                                j === 6 ||
                                j === 7 ||
                                j === 8
                              ) {
                                context.drawImage(image2, 5, 6, 16, 16);
                              }
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
                                context.drawImage(banner, 3, 10, 16, 16);
                              }
                              if (e === 1) {
                                context.drawImage(image4, 16, 10, 16, 16);
                              }
                              if (e === 0) {
                                context.drawImage(image4, 0, 0, 0, 0);
                              }
                              if (k === 2) {
                                context.drawImage(banner, 3, 12, 16, 16);
                              }
                            }
                            if (i >= 18 && i <= 26) {
                              context.drawImage(image1, 0, -2, 32, 32);
                              if (j === 0 || j === 1 || j === 2) {
                                context.drawImage(image2, 5, 7, 16, 16);
                              } else if (
                                j === 3 ||
                                j === 4 ||
                                j === 5 ||
                                j === 6 ||
                                j === 7 ||
                                j === 8
                              ) {
                                context.drawImage(image2, 5, 7, 16, 16);
                              }
                              if (m === 0) {
                                context.drawImage(image3, 5, 12, 16, 16);
                              }
                              if (m === 1) {
                                context.drawImage(image3, 4, 12, 16, 16);
                              }
                              if (k === 1) {
                                context.drawImage(banner, 4, 10, 16, 16);
                              }
                              if (e === 1) {
                                context.drawImage(image4, 17, 10, 16, 16);
                              }
                              if (e === 0) {
                                context.drawImage(image4, 0, 0, 0, 0);
                              }
                              if (k === 2) {
                                context.drawImage(banner, 4, 12, 16, 16);
                              }
                              if (k === 0) {
                                context.drawImage(banner, 0, 0, 0, 0);
                              }
                            } else if (i >= 27 && i <= 35) {
                              context.drawImage(image1, -1, -1, 32, 32);
                              if (j === 0 || j === 1 || j === 2) {
                                context.drawImage(image2, 5, 7, 16, 16);
                              } else if (
                                j === 3 ||
                                j === 4 ||
                                j === 5 ||
                                j === 6 ||
                                j === 7 ||
                                j === 8
                              ) {
                                context.drawImage(image2, 5, 6, 16, 16);
                              }
                              if (m === 0) {
                                context.drawImage(image3, 5, 13, 16, 16);
                              }
                              if (m === 1) {
                                context.drawImage(image3, 4, 13, 16, 16);
                              }
                              if (k === 1) {
                                context.drawImage(banner, 4, 11, 16, 16);
                              }
                              if (e === 1) {
                                context.drawImage(image4, 16, 11, 16, 16);
                              }
                              if (e === 0) {
                                context.drawImage(image4, 0, 0, 0, 0);
                              }
                              if (k === 2) {
                                context.drawImage(banner, 4, 12, 16, 16);
                              }
                              if (k === 0) {
                                context.drawImage(banner, 0, 0, 0, 0);
                              }
                            } else if (i >= 0 && i <= 8) {
                              context.drawImage(image1, 0, 0, 32, 32);
                              if (j === 0 || j === 1 || j === 2) {
                                context.drawImage(image2, 5, 7, 16, 16);
                              } else if (
                                j === 3 ||
                                j === 4 ||
                                j === 5 ||
                                j === 6 ||
                                j === 7 ||
                                j === 8
                              ) {
                                context.drawImage(image2, 5, 8, 16, 16);
                              }
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
                                context.drawImage(banner, 4, 12, 16, 16);
                              }
                              if (k === 2) {
                                context.drawImage(banner, 4, 12, 16, 16);
                              }
                              if (e === 1) {
                                context.drawImage(image4, 17, 12, 16, 16);
                              }
                              if (e === 0) {
                                context.drawImage(image4, 0, 0, 0, 0);
                              }
                            }

                            const buffer = canvas.toBuffer();
                            await fs.writeFile(
                              `generated/apes/${i + 1}-${j + 1}-${m + 1}-${
                                k + 1
                              }-${e + 1}.png`,
                              buffer
                            );
                          }
                        );
                      }
                    }
                  );
                }
              }
            );
          }
        });
      }
    });
  }
}

//done
async function genCat() {
  const headFolder = "./assets/cat_assets/head/";
  const eyeFolder = "./assets/cat_assets/eye/";
  const piercingFolder = "./assets/cat_assets/piercing/";

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
                        await loadImage(`${scarFolder}${scararr[s]}`).then(
                          async (image4) => {
                            for (let t = 0; t < tonguearr.length; t++) {
                              await loadImage(
                                `${tongueFolder}${tonguearr[t]}`
                              ).then(async (image5) => {
                                context.clearRect(
                                  0,
                                  0,
                                  canvas.width,
                                  canvas.height
                                );
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
                                  context.drawImage(banner, 6, 14, 16, 16);
                                }
                                if (s === 0) {
                                  context.drawImage(image4, 0, 0, 0, 0);
                                }
                                if (s === 1) {
                                  context.drawImage(image4, 11, 9, 16, 16);
                                }
                                if (t === 0) {
                                  context.drawImage(image5, 0, 0, 0, 0);
                                }
                                if (t === 1) {
                                  context.drawImage(image5, 5, 15, 16, 16);
                                }

                                const buffer = canvas.toBuffer();
                                await fs.writeFile(
                                  `generated/cats/${i + 1}-${j + 1}-${b + 1}-${
                                    k + 1
                                  }-${s + 1}-${t + 1}.png`,
                                  buffer
                                );
                              });
                            }
                          }
                        );
                      }
                    }
                  );
                }
              }
            );
          }
        });
      }
    });
  }
}

//donezou
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

                            if (i >= 0 && i <= 8) {
                              //head 1
                              context.drawImage(image1, 0, 0, 32, 32);
                              if (
                                j === 1 ||
                                j === 2 ||
                                j === 3 ||
                                j === 4 ||
                                j === 5 ||
                                j === 6 ||
                                j === 7 ||
                                j === 8
                              ) {
                                context.drawImage(image2, -3, 5, 32, 16);
                              } else if (j === 0) {
                                context.drawImage(image2, -2, 5, 32, 16);
                              }
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
                                context.drawImage(banner, 0, 0, 0, 0);
                              }
                              if (k === 1) {
                                context.drawImage(banner, 4, 14, 16, 16);
                              }
                              if (k === 2) {
                                context.drawImage(banner, 1, 14, 16, 16);
                              }
                            }
                            if (i >= 9 && i <= 17) {
                              //head 2
                              context.drawImage(image1, -1, 0, 32, 32);
                              if (
                                j === 1 ||
                                j === 2 ||
                                j === 3 ||
                                j === 4 ||
                                j === 5 ||
                                j === 6 ||
                                j === 7 ||
                                j === 8
                              ) {
                                context.drawImage(image2, -3, 5, 32, 16);
                              } else if (j === 0) {
                                context.drawImage(image2, -2, 5, 32, 16);
                              }
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
                                context.drawImage(banner, 0, 0, 0, 0);
                              }
                              if (k === 1) {
                                context.drawImage(banner, 2, 19, 16, 16);
                              }
                              if (k === 2) {
                                context.drawImage(banner, 2, 13, 16, 16);
                              }
                            }
                            if (i >= 18 && i <= 26) {
                              //head 3
                              context.drawImage(image1, -2, 0, 32, 32);
                              if (
                                j === 1 ||
                                j === 2 ||
                                j === 3 ||
                                j === 4 ||
                                j === 5 ||
                                j === 6 ||
                                j === 7 ||
                                j === 8
                              ) {
                                context.drawImage(image2, -3, 5, 32, 16);
                              } else if (j === 0) {
                                context.drawImage(image2, -2, 5, 32, 16);
                              }
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
                                context.drawImage(banner, 4, 14, 16, 16);
                              }
                              if (k === 2) {
                                context.drawImage(banner, 1, 14, 16, 16);
                              }
                            }
                            if (i >= 27 && i <= 35) {
                              //head 4
                              context.drawImage(image1, 0, 0, 32, 32);
                              if (
                                j === 1 ||
                                j === 2 ||
                                j === 3 ||
                                j === 4 ||
                                j === 5 ||
                                j === 6 ||
                                j === 7 ||
                                j === 8
                              ) {
                                context.drawImage(image2, -3, 5, 32, 16);
                              } else if (j === 0) {
                                context.drawImage(image2, -2, 5, 32, 16);
                              }
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
                                context.drawImage(banner, 4, 12, 16, 16);
                              }
                              if (k === 2) {
                                context.drawImage(banner, 1, 12, 16, 16);
                              }
                            }

                            const buffer = canvas.toBuffer();
                            await fs.writeFile(
                              `generated/dawg/${i + 1}-${j + 1}-${k + 1}-${
                                s + 1
                              }-${t + 1}.png`,
                              buffer
                            );
                          }
                        );
                      }
                    }
                  );
                }
              }
            );
          }
        });
      }
    });
  }
}

// genApe();

async function diffChecker() {
  const apePath = "./generated/apes/";
  const catsPath = "./generated/cats/";
  const dawgPath = "./generated/dawg/";
  const humansPath = "./generated/humans/"; //
  const imagePaths = [humansPath, apePath, catsPath, dawgPath];
  var harr = [];
  var aarr = [];
  var carr = [];
  var darr = [];
  const arrs = [harr, aarr, carr, darr];

  var images = [];
  var equals = [];
  var answers;
  try {

    for (let index = 0; index < imagePaths.length; index++) {
      const files = await fs.readdir(imagePaths[index]);
      for (const file of files) {
        arrs[index].push(file);
      }
    }

    for(let img = 0; img < arrs.length; img++){
      var results = [];
      for (let i = 0; i < arrs[img].length - 1; i++) {
        await imageToBase64(`${imagePaths[img]}${arrs[img][i]}`) 
          .then((response1) => {
            imageToBase64(`${imagePaths[img]}${arrs[img][i+1]}`) 
              .then((response2) => {
                if (response1 === response2) {
                  answers = "Equals";
                  equals.push(i);
                } else if (response1 !== response2) {
                  answers = "Not Equals";
                }
                results.push(answers);
              })
              .catch((error) => {
                console.log(error); 
              }); 
          })
          .catch((error) => {
            console.log(error);
          });
      }

      const found = results.find((element) => element === "Equals");
      console.log(imagePaths[img]);
      if (typeof found === "undefined") {
        console.log("0 Equals");
        console.log(found);
      } else {
        console.log("At least one found");
        console.log(found);
      }
    }
  } catch (err) {
    console.log(err);
  }
}

// diffChecker();

async function Main() {
  console.log("Starting humans");

  await genHumans();

  console.log("Ending humans");
  console.log("Starting Apes");

  await genApe();

  console.log("Ending Apes");
  console.log("Starting Cats");

  await genCat();

  console.log("Ending Cats");
  console.log("Starting Dawgs");

  await genDawg();

  console.log("Ending Dawgs");

  await diffChecker();
}

Main();
