var React = require('react');
var Reflux = require('reflux');
var TopicStore = require('../stores/topic-store');
var Actions = require('../actions');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
  mixins: [
    //listening for any event in TopicStore module
    //it then runs onChange function
    Reflux.listenTo(TopicStore, 'onChange')
  ],
  getInitialState: function(){
    return {
      //topics starts with an empty array
      topics: []
    }
  },
  componentWillMount: function() {
    Actions.getTopics();
  },
  render: function(){
    return <div className="list-group">
      {this.renderTopics()}
    </div>
  },
  //sets topics in li to render on page
  renderTopics: function(){
    return this.state.topics.slice(0, 4).map(function(topic){
      return <Link to={"topics/" + topic.id}className="list-group-item" key={topic.id}>
        <h4>{topic.name}</h4>
        <p>{topic.description}</p>
      </Link>
    });
  },
  onChange: function(event, topics) {
    //will take in topics and triggers a rerenders on content
    this.setState({topics: topics});
  }
});
