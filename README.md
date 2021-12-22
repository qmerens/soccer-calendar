# Module: Soccer Calendar

The 'SOCCERCAL' module is a costum module for [MagicMirror](https://github.com/MichMich/MagicMirror). The idea was to connect to the a calendar webpage published on [Sainte Anne de Lachine](https://secondaire.lachine.sainteanne.ca/calendrier-soccer/) and extract some teams and then display the next game in a module.

The module will display the upcoming games for those teams.

Users can use this module to experiment a few things on MagicMirror:
- Use of the sendNotification function
- Get data from a web URL through Pyton
- call a python script from node-helper
- Update the data on some frequency

The datasample.json file gives an example of the JSON structure the data of the calendar is returned.
The module uses the source field as the name of the team.

## Installation instructions 
Just pull down this repo and copy it in the modules folder under your Magic Mirror installation folder


## Using the module

To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: [
  {
    module: 'SOCCERCAL',
    position: 'top_right',  // This can be any of the regions.
    config: {
      // See 'Configuration options' for more information.
      setup:[{teamname:"Futsal CM (sec. 4)",alias:"Quentin"},{teamname:"Futsal AM Or (sec. 1)",alias:"Virgile"}]

    }
  }
]
````

## Configuration options

<table width="100%">
  <!-- why, markdown... -->
  <thead>
    <tr>
      <th>Option</th>
      <th width="100%">Description</th>
    </tr>
  <thead>
  <tbody>
    <tr>
      <td><code>setup</code></td>
      <td>This is an array of json object which specifies the teams to display. A team has an alias (in my case the name of a player) and a team name. The order the teams appear in the array will be the order they will be displayed.
      </td>
    </tr>

  </tbody>
</table>
