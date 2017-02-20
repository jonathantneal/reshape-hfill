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
	expect: `<h role="heading" aria-level="1">Heading</h>
<p>...</p>
<section>
	<h role="heading" aria-level="2">Heading</h>
	<p>...</p>
	<section>
		<h role="heading" aria-level="3">X Heading</h>
		<p>...</p>
		<section>
			<p>...</p>
			<h role="heading" aria-level="4">Heading</h>
			<section>
				<h role="heading" aria-level="5">Heading</h>
				<p>...</p>
				<article id="y">
					<h role="heading" aria-level="6">Y Heading</h>
					<p>...</p>
					<aside>
						<h role="heading" aria-level="7">Heading</h>
						<p>...</p>
					</aside>
				</article>
			</section>
		</section>
	</section>
</section>
<section>
	<h role="heading" aria-level="2">Heading</h>
	<p>...</p>
</section>`
};
