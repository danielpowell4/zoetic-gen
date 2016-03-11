// getting react ready to go
var React = require('react');
var ReactDOM = require('react-dom');


var ExerciseCategoryRow = React.createClass({
  render: function() {
    return (<tr><th colSpan="2">{this.props.category}</th></tr>);
  }
});

var ExerciseRow = React.createClass({
  render: function() {
    return (
      <tr>
        <td>{this.props.exercise.name}</td>
        <td>{this.props.exercise.intensity}</td>
      </tr>
    );
  }
});

var ExerciseTable = React.createClass({
  render: function() {
    var rows = [];
    var lastCategory = null;
    this.props.exercises.forEach(function(exercise) {
      if (exercise.name.indexOf(this.props.filterText) === -1 {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(<ExerciseCategoryRow category={exercise.category} key={exercise.category} />);
      }
      rows.push(<ExerciseRow exercise={exercise} key={exercise.name} />);
      lastCategory = exercise.category;
    }.bind(this));
    return (
      <table>
        <thead>
          <tr>
            <th>Exercise</th>
            <th>Intensity</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
});

var SearchBar = React.createClass({
  render: function() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox" />
          {' '}
          Only show exercise intensity 5
        </p>
      </form>
    );
  }
});

var FilterableExerciseTable = React.createClass({
  render: function() {
    return (
      <div>
        <SearchBar />
        <ExerciseTable exercises={this.props.exercises} />
      </div>
    );
  }
});

var EXERCISES = [
  {category: 'warm_up', name: 'Warm Up 1', intensity: 5}
  {category: 'plyo', name: 'Plyo 1', intensity: 5},
  {category: 'push', name: 'Push 1', intensity: 5},
  {category: 'pull', name: 'Pull 1', intensity: 5},
  {category: 'core', name: 'Core 1', intensity: 5},
  {category: 'legs', name: 'Legs 1', intensity: 5},
  {category: 'cool_down', name: 'Cool Down 1', intensity: 5}
];

ReactDOM.render(
  <FilterableExerciseTable exercises={EXERCISES} />,
  document.getElementById('container')
);
