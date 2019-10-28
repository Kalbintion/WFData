# WFData
This is a project to contain various bits of information in regards to Warframe, by Digital Extremes, to be used in other applications as a public pool of data offered in various formats.

# Files
- ByInternal.json &dash; Contains every internal name in Warframe to be used as a collection to feed in the unique name given by DE and in return gives the Name, Type, and Subtype of the object.
- ByName.json &dash; Contains every English name in Warframe to be used as a collection to feed in the English name given by DE and in return gives the Type, Subtype and Internal string of the object.
- Nodes.js &dash; JavaScript file containing a single function to translate internal node names (such as 'SolNode123') into their proper Sector (Planet) combination.
- Nodes.json &dash; JSON data of every node by Internal Name (such as 'SolNode1') into a JSON object containing the Planet and Sector.
- Other.js &dash; JavaScript file containing multiple functions to translate internal names of Factions, Sortie Modifiers, Sortie Bosses, Mission Types, Fissure Type, and Nightwave Challenges

## Core files
The following files are deemed to be 'Core Files' - What this means is that these files are the base files that are edited and then converted into the other formats by use of the internal tools available.
- ByInternal.json
- Nodes.json

# Issues
If there is an issue with any of the files, please report it on the Issues tracker. If you wish to take it a step further, feel free to fix the issue and make a pull request.

# Other Formats
Is there a data format that you would like to see here? If so, please report it on the issues tracker and it can be discussed about adding it. Note that all formats not already provided may require additional internal tools to be made to convert into that new format. Creating a tool to convert one of the base files (see Files section above)

# Tools
Applications found under the Tools folder were created to aid in gathering information quickly from the game or from the wiki. These tools are provided as-is and may or may not work over time as things change.