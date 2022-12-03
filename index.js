const randomTablesLib = require("@random-tables/generator-logic");

const fantasyGenerator = require("@random-tables/npc-fantasy");

randomTablesLib.buildIndex([fantasyGenerator]);

async function getTableData(call) {
  const dwarfData = await randomTablesLib.getCall(call);
  console.log("dwarfData", dwarfData);

  const indexName = document.getElementById("input-name");
  indexName.value = dwarfData[0].value;

  const indexAge = document.getElementById("input-age");
  indexAge.value = dwarfData[1].value;

  const indeDesc = document.getElementById("input-desc");
  indeDesc.value = dwarfData[2].value;

  const indexPers = document.getElementById("input-pers");
  indexPers.value = dwarfData[3].value;

  const indexMotivations = document.getElementById("input-motivations");
  indexMotivations.value = dwarfData[4].value;

  const indexFamily = document.getElementById("input-family");
  indexFamily.value = dwarfData[5].value;

  const indexPast = document.getElementById("input-past");
  indexPast.value = dwarfData[6].value;
}

const maleDwarfGen = document.getElementById("gen-d-male");
maleDwarfGen.onclick = () => getTableData("npc-fantasy/dwarf/male");
const femaleDwarfGen = document.getElementById("gen-d-female");
femaleDwarfGen.onclick = () => getTableData("npc-fantasy/dwarf/female");
