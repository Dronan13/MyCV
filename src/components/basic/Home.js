import React, { Component } from 'react';
import cfg from '../config/cfg'

class Home extends Component {
    constructor() {
   
        super();
        this.state = 
        {
            'formFields': {
                username: '',
                password: ''
            }    
        }
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      componentDidMount() {
        //this.getHeroesTotal();
      }
      /*
      getHeroesTotal()
      {
        fetch('api/heroes_count')
            .then(results => results.json())
            .then(results => this.setState(
                {
                    'heroes_total' : results
                }
            ))
            .catch(function (error) {
                console.log(error);
              });
      }
      */
     inputChangeHandler(e) {
        let formFields = {...this.state.formFields};
        formFields[e.target.name] = e.target.value;
        this.setState({
         formFields
        });
       } 
      
     handleSubmit(e) {
        e.preventDefault();
        const data = this.state.formFields;
        fetch(cfg.baseURL+'api/login', {
            method: 'POST',
            headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
               },
            body: JSON.stringify(data)
          })
          .then(function(response){
            console.log(response)
            //Perform action based on response
        })
          .catch(function(error){
            console.log(error)
            //Perform action based on error
          });
       }  


     render() {
        return (
            <div>
                <div className="bgimg-1">
                <div className="caption">
                    <span className="border">SOME FANCY FRAZE</span>
                </div>
                </div>

                <div className='box-text'>
                <h3 className='text-center'>Some text about</h3>
                <p>Parallax scrolling is a web site trend where the background content is moved at a different 
                    speed than the foreground content while scrolling. Nascetur per nec posuere turpis, lectus 
                    nec libero turpis nunc at, sed posuere mollis ullamcorper libero ante lectus, blandit 
                    pellentesque a, magna turpis est sapien duis blandit dignissim. Viverra interdum mi 
                    magna mi, morbi sociis. Condimentum dui ipsum consequat morbi, curabitur aliquam pede, 
                    nullam vitae eu placerat eget et vehicula. Varius quisque non molestie dolor, nunc nisl 
                    dapibus vestibulum at, sodales tincidunt mauris ullamcorper, dapibus pulvinar, in in neque 
                    risus odio. Accumsan fringilla vulputate at quibusdam sociis eleifend, aenean maecenas 
                    vulputate, non id vehicula lorem mattis, ratione interdum sociis ornare. Suscipit proin
                     magna cras vel, non sit platea sit, maecenas ante augue etiam maecenas, porta porttitor placerat leo.</p>
                </div>

                <div className="bgimg-2">
                <div className="caption">
                    <span className="border">CONTACTS</span>
                </div>
                </div>

                <div className='box-text'>
                <h3 className='text-center'>Parallax Demo</h3>
                <p>Parallax scrolling is a web site trend where the background content is moved at a different 
                    speed than the foreground content while scrolling. Nascetur per nec posuere turpis, lectus 
                    nec libero turpis nunc at, sed posuere mollis ullamcorper libero ante lectus, blandit 
                    pellentesque a, magna turpis est sapien duis blandit dignissim. Viverra interdum mi 
                    magna mi, morbi sociis. Condimentum dui ipsum consequat morbi, curabitur aliquam pede, 
                    nullam vitae eu placerat eget et vehicula. Varius quisque non molestie dolor, nunc nisl 
                    dapibus vestibulum at, sodales tincidunt mauris ullamcorper, dapibus pulvinar, in in neque 
                    risus odio. Accumsan fringilla vulputate at quibusdam sociis eleifend, aenean maecenas 
                    vulputate, non id vehicula lorem mattis, ratione interdum sociis ornare. Suscipit proin
                     magna cras vel, non sit platea sit, maecenas ante augue etiam maecenas, porta porttitor placerat leo.</p>
                </div>

                <div className="bgimg-3">
                <div className="caption">
                    <span className="border">CONTACT US</span>
                </div>
                </div>

                <div className='box-text'>
                <form id="contact-form">

                    <div class="messages"></div>

                    <div class="controls">

                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label htmlFor="form_name">Firstname *</label>
                                    <input id="form_name" type="text" name="name" 
                                            class="form-control" 
                                            placeholder="Please enter your firstname *" 
                                            required="required" data-error="Firstname is required."/>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label htmlFor="form_lastname">Lastname *</label>
                                    <input id="form_lastname" type="text" name="surname" 
                                            class="form-control" placeholder="Please enter your lastname *" 
                                            required="required" data-error="Lastname is required."/>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label htmlFor="form_email">Email *</label>
                                    <input id="form_email" type="email" name="email" 
                                    class="form-control" placeholder="Please enter your email *" 
                                    required="required" data-error="Valid email is required."/>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label htmlFor="form_need">Please specify your need *</label>
                                    <select id="form_need" name="need" class="form-control" 
                                            required="required" data-error="Please specify your need.">
                                        <option value=""></option>
                                        <option value="Request quotation">Request quotation</option>
                                        <option value="Request order status">Request order status</option>
                                        <option value="Request copy of an invoice">Request copy of an invoice</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label htmlFor="form_message">Message *</label>
                                    <textarea id="form_message" name="message" 
                                              class="form-control" placeholder="Message for me *" 
                                              rows="4" required="required" 
                                              data-error="Please, leave us a message."></textarea>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <input type="submit" class="btn btn-success btn-send" value="Send message"/>>
                            </div>
                        </div>
                    </div>
                </form>
                </div>

                

                <div className="bgimg-1">
                <div className="caption">
                    <span className="border">THANK YOU</span>
                </div>
                </div>        
            </div>
        );
    }
}
export default Home;