class LandingSections extends React.Component {
  constructor (){
    super();
    this.state = {};    
  }

  render (){
    return (
      <div>
        <section className='intro'>
          Battle Toads
        </section>
        <section className='about'>
          <div className='container'>
            <div className='col-sm-5'>
            </div>
            <div className='col-sm-7'>
              <h2>Test your prowess</h2>
              <p>Become the master toad you always knew you could be.</p>
            </div>
          </div>
        </section>
        <section className=''>
          <div className='col-sm-5'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
          </div>
          <div className='col-sm-7'>
          </div>
        </section>

      </div>
      );
  }
}

module.exports = LandingSections;