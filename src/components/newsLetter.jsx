import React, { useState } from 'react'

const NewsLetter = () => {
  return (

    

    <div className='w-full py-16 text-white bg-gray-400 mt-8'>
        <script src="https://f.convertkit.com/ckjs/ck.5.js"/>
      <form action="https://app.convertkit.com/forms/6045800/subscriptions"  method="post" data-sv-form="6045800" data-uid="a7ec921feb" data-format="inline" data-version="5" data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:&quot;Success! Now check your email to confirm your subscription.&quot;,&quot;redirect_url&quot;:&quot;&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;fathom&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null,&quot;sparkloop&quot;:null,&quot;googletagmanager&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:true,&quot;url&quot;:&quot;https://convertkit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;show&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;version&quot;:&quot;5&quot;}" min-width="400 500 600 700 800">
		<div data-style="clean" className='max-w-[1240px] mx-auto grid lg:grid-cols-3 con'>
			<div className='lg:col-span-2 my-4'>
                    <h1 className='font-medium md:text-4xl sm:text-3x text-2xl'>Want tips and tricks to optimize your studying?</h1>
                    <p>Sign up to our newsletter and stay up to date.</p>
                </div>
			<ul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
			<div data-element="fields" data-stacked="false" class="seva-fields formkit-fields" className='flex flex-col sm:flex-row items-center justify-between w-full'>
				
				<div class="formkit-field">
				<input name="email_address" aria-label="Email Address" 
				placeholder="Email Address" required="" type="email" className='p-3 w-[400px] rounded-md text-black' />
				</div>
				<div className='mt-4'>
					<button data-element="submit" class="formkit-submit formkit-submit" className='bg-black text-gray-400 rounded-md font-medium w-[200px] ml-4 mx-6 py-3' ><div class="formkit-spinner"><div></div><div></div><div></div></div><span class="">Subscribe</span></button>
				</div>
			</div>
				<div></div>
		</div>
      </form>
    </div>
   )
}

export default NewsLetter;