import { expect } from '@open-wc/testing';
import { FONT_SIZES, FONT_SPACING, INPUT_SIZES, THEME_COLORS, THEME_PALETTE } from './styleConstants.js';

describe('StyleConstants', () => {
  describe('FONT_SIZES', () => {
    it('should contain the correct font sizes', () => {
      expect(FONT_SIZES).to.exist;
      const keys = Object.keys(FONT_SIZES);

      expect(keys.length).to.be.equal(9);
      expect(keys).to.contain('xx-small');
      expect(keys).to.contain('x-small');
      expect(keys).to.contain('small');
      expect(keys).to.contain('medium');
      expect(keys).to.contain('large');
      expect(keys).to.contain('x-large');
      expect(keys).to.contain('xx-large');
      expect(keys).to.contain('xxx-large');
      expect(keys).to.contain('xxxx-large');
    });
  });

  describe('FONT_SPACING', () => {
    it('should contain the correct font spacings', () => {
      expect(FONT_SPACING).to.exist;
      const keys = Object.keys(FONT_SPACING);

      expect(keys.length).to.be.equal(3);
      expect(keys).to.contain('dense');
      expect(keys).to.contain('normal');
      expect(keys).to.contain('loose');
    });
  });

  describe('INPUT_SIZES', () => {
    it('should contain the correct input sizes', () => {
      expect(INPUT_SIZES).to.exist;
      const keys = Object.keys(INPUT_SIZES);

      expect(keys.length).to.be.equal(3);
      expect(keys).to.contain('small');
      expect(keys).to.contain('medium');
      expect(keys).to.contain('large');
    });
  });

  describe('THEME_PALETTE', () => {
    it('should contain the correct palette', () => {
      expect(THEME_PALETTE).to.exist;
      const keys = Object.keys(THEME_PALETTE);

      expect(keys.length).to.equal(7);
      expect(keys).to.contain('default');
      expect(keys).to.contain('primary');
      expect(keys).to.contain('secondary');
      expect(keys).to.contain('error');
      expect(keys).to.contain('warning');
      expect(keys).to.contain('info');
      expect(keys).to.contain('success');
    });
  });

  describe('THEME_COLORS', () => {
    it('should contain the correct colors', () => {
      expect(THEME_COLORS).to.exist;
      const keys = Object.keys(THEME_COLORS);

      expect(keys.length).to.equal(11);
      expect(keys).to.contain('white');
      expect(keys).to.contain('black');
      expect(keys).to.contain('blue');
      expect(keys).to.contain('green');
      expect(keys).to.contain('grey');
      expect(keys).to.contain('orange');
      expect(keys).to.contain('pink');
      expect(keys).to.contain('purple');
      expect(keys).to.contain('red');
      expect(keys).to.contain('teal');
      expect(keys).to.contain('yellow');
    });
  });
});
