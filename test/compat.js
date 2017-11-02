module.exports = {
	source: `<h>Heading</h>
<p>...</p>
<section>
	<h>Heading</h>
	<p>...</p>
	<section>
		<h>X Heading</h>
		<p>...</p>
		<section>
			<p>...</p>
			<h>Heading</h>
			<section>
				<h>Heading</h>
				<p>...</p>
				<article id="y">
					<h>Y Heading</h>
					<p>...</p>
					<aside>
						<h>Heading</h>
						<p>...</p>
					</aside>
				</article>
			</section>
		</section>
	</section>
</section>
<section>
	<h>Heading</h>
	<p>...</p>
</section>`,
	expect: `<h1>Heading</h1>
<p>...</p>
<section>
	<h2>Heading</h2>
	<p>...</p>
	<section>
		<h3>X Heading</h3>
		<p>...</p>
		<section>
			<p>...</p>
			<h4>Heading</h4>
			<section>
				<h5>Heading</h5>
				<p>...</p>
				<article id="y">
					<h6>Y Heading</h6>
					<p>...</p>
					<aside>
						<h6>Heading</h6>
						<p>...</p>
					</aside>
				</article>
			</section>
		</section>
	</section>
</section>
<section>
	<h2>Heading</h2>
	<p>...</p>
</section>`
};
