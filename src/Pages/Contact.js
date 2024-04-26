const Contact = () => {
	return (
		<>
			<div className="pb-0 pb-sm-2">
				<h1 className="title title--h1 title__separate">Contact</h1>
			</div>

			<h2 className="title title--h2">Contact Form</h2>
			<form
				id="contact-form"
				className="contact-form"
				data-toggle="validator"
			>
				<div className="row">
					<div className="form-group col-12 col-md-6">
						<input
							type="text"
							className="input form-control"
							id="nameContact"
							name="nameContact"
							placeholder="Full name"
							required="required"
							autocomplete="on"
							oninvalid="setCustomValidity('Fill in the field')"
							onkeyup="setCustomValidity('')"
						/>
						<div className="help-block with-errors"></div>
					</div>
					<div className="form-group col-12 col-md-6">
						<input
							type="email"
							className="input form-control"
							id="emailContact"
							name="emailContact"
							placeholder="Email address"
							required="required"
							autocomplete="on"
							oninvalid="setCustomValidity('Email is incorrect')"
							onkeyup="setCustomValidity('')"
						/>
						<div className="help-block with-errors"></div>
					</div>
					<div className="form-group col-12 col-md-12">
						<textarea
							className="textarea form-control"
							id="messageContact"
							name="messageContact"
							placeholder="Your Message"
							rows="4"
							required="required"
							oninvalid="setCustomValidity('Fill in the field')"
							onkeyup="setCustomValidity('')"
						></textarea>
						<div className="help-block with-errors"></div>
					</div>
				</div>
				<div className="row">
					<div className="col-12 col-md-6 order-2 order-md-1 text-center text-md-start">
						<div id="validator-contact" className="hidden"></div>
					</div>
					<div className="col-12 col-md-6 order-1 order-md-2 text-end">
						<button type="submit" className="btn">
							<i className="font-icon icon-send"></i> Send Message
						</button>
					</div>
				</div>
			</form>
		</>
	)
}

export default Contact
